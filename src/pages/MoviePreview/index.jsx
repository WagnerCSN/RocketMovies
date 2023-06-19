import { Container, Content, Title } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useAuth } from "../../hooks/auth";
import timer from "../../assets/timer.svg";
import { useNavigate } from "react-router-dom";

export function MoviePreview(){
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [movie, setMovie] = useState([]);
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;
    const navigate = useNavigate();

    const params = useParams();

    async function childToParent(childdata){
        const response = await api.get(`/movies?title=${childdata}`);
        setMovie(response.data);
        if(movie){
            await movie.map(mo => { 
                navigate(`/preview/${mo.id}`);
            })
        }
      }

    useEffect(() =>{
        async function fetchMovie(){
            const response = await api.get(`/movies/${params.id}`);
            setData(response.data);
        }
        fetchMovie()
    },[params])
    return(
        <Container >
            <Header childToParent={childToParent}/>
           
            <Title>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
            </Title>

            {data&& 
                <Content>
                    <div>
                        <h1>{data.title}</h1>
                        <span id="rating" >
                            <Rating 
                                size={20}
                                rating={data.rating}
                            />
                        </span>
                    </div>

                    <div id="data_user">
                        <img src={avatarUrl}/>

                        <span id="user">
                            Por { user.name}
                        </span>

                        <img 
                            src={timer}
                        /> {data.created_at}
                    </div >

                    {
                        data.tag&& data.tag.map(tags => (
                        <Tag 
                            key={String(tags.id)}
                            title={tags.name}/>
                        ))
                    }
                    <p>
                        {data.description}
                    </p>
                </Content>
            }   
        </Container>
    )
}