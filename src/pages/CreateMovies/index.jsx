import { Container, Content } from "./styles";
import { Header } from "../../components/Header"
import { FiPlus } from "react-icons/fi"
import { Input } from "../../components/Input"

export function CreateMovies(){
    return(
        <Container>
            <Header/>
            <a href="#">
                <FiPlus/>
                Voltar
            </a>

            <h1>Novo filme</h1>

            <Content>
                <div>
                <Input placeholder="Título" type="text"/>
                <Input placeholder="Sua nota (de 0 a 5)" type="text"/>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Observações"></textarea>
            </Content>
        </Container>
    )
}