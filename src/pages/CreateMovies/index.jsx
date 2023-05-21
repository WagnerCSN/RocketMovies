import { Container, Content, Title, Choose } from "./styles";
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { MovieItem } from "../../components/MovieItem";
import { Link } from "react-router-dom";

export function CreateMovies(){
    return(
        <Container>
            <Header/>
            <Title>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
                
                <h1>Novo filme</h1>
            </Title>
            <Content>
                <div>
                    <Input placeholder="Título" type="text"/>
                    <Input placeholder="Sua nota (de 0 a 5)" type="text"/>
                </div>
                <textarea placeholder="Observações"></textarea>

                <h2>Marcadores</h2>

                <section>
                    <MovieItem value="React"/> 
                    <MovieItem value="Novo marcador" isNew/>               
                </section>

                <Choose>
                    <button class="excluir">
                        Excluir filme
                    </button>

                    <button  class="salvar">
                        Salvar filme
                    </button>
                </Choose>
            </Content>
        </Container>
    )
}