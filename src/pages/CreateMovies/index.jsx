import { Container, Content, Title, Choose } from "./styles";
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { MovieItem } from "../../components/MovieItem";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api"

export function CreateMovies(){
    const [title, setTitle] = useState("");
    const [description, setDescription]= useState("");
    const [rating, setRating] = useState("");
    const [tags, setTags] = useState([]);
    const [newtag, setNewTag] = useState("");
    const [movie, setMovie] = useState([]);
    const navigate = useNavigate();

    function handleTags(){
        setTags(prevState => [...prevState, newtag]);
        setNewTag("");
    }

    async function childToParent(childdata){
        const response = await api.get(`/movies?title=${childdata}`);
        setMovie(response.data);
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag!== deleted));
    }

    async function handleRemoveMovie(){
        
        if(movie){
            await movie.map(mo => { 
                const remove =window.confirm(`Deseja realmente remover o filme: ${mo.title}?`);
                if(remove){
                    api.delete(`/movies/${mo.id}`)
                    navigate(-1);
                }
            })
        }
        alert("Filme removido com sucesso!");
    }

    async function handleSaveMovie(){
            if(newtag){
                return alert("Tem uma tag digitada que não foi adicionada!");
            }
        
            await api.post("/movies", {
                title,
                description,
                rating,
                tags
            });
            alert("Filme salvo com sucesso!");
            navigate("/");
    }
    return(
        <Container>
            <Header childToParent={childToParent}/>
            <Title>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
                
                <h1>Novo filme</h1>
            </Title>
            <Content>
                <div>
                    <Input 
                        placeholder="Título" 
                        type="text"
                        onChange={e =>setTitle(e.target.value)}
                    />
                    <Input 
                        placeholder="Sua nota (de 0 a 5)" 
                        type="text"
                        onChange={e =>setRating(e.target.value)}
                    />
                </div>
                <textarea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                ></textarea>

                <h2>Marcadores</h2>

                <section>
                    {
                        tags.map((tag, index) => (
                            <MovieItem 
                                key={String(index)}
                                value={tag} 
                                onClick={()=>{handleRemoveTag(tag)}}
                            />      
                        ))
                    }
                   
                    <MovieItem 
                        isNew
                        value={newtag} 
                        placeholder="Novo marcador"
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleTags}
                    />               
                </section>

                <Choose>
                    <button 
                        class="excluir"
                        onClick={handleRemoveMovie}
                    >
                        Excluir filme
                    </button>

                    <button  
                        class="salvar"
                        onClick={handleSaveMovie}    
                    >
                        Salvar filme
                    </button>
                </Choose>
            </Content>
        </Container>
    )
}