import { Container, AddMovie, Title, Content } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Frame } from "../../components/Frame"
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home(){
    const [movies, setMovie] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
    function childToParent(childdata){
        setSearch(childdata);
      }

    async function viewMovie(id){
        navigate(`/preview/${id}`);
    }

    useEffect(() => {
        try{
            async function fetchMovie(){
                    const response = await api.get(`/movies?title=${search}`);
                    setMovie(response.data);
            }

            fetchMovie();
        }catch(error){
            if(error.response)
            {alert(error.response.data.message)};
        }
    }, [search]);
    
    return(
        <Container>
            <Header  childToParent={childToParent} />
            <Title>
                <h1>Meus filmes</h1>
                <AddMovie to="/create"> 
                    <FiPlus size={20}/>
                     Adicionar filme 
                </AddMovie>
            </Title>

            <Content>
                { search &&
                    movies.map(movie=> (
                    <Frame 
                        key={String(movie.id)}
                        data={movie}
                        onClick={() => viewMovie(movie.id)}
                    />
                    ))
                }
            </Content>
        </Container>
    )
}