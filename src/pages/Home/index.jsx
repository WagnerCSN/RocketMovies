import { Container, AddMovie, Title, Content } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Frame } from "../../components/Frame"


export function Home(){
    return(
        <Container>
            <Header/>
            <Title>
                <h1>Meus filmes</h1>
                <AddMovie to="/create"> 
                    <FiPlus size={20}/>
                     Adicionar filme 
                </AddMovie>
            </Title>

            <Content>
                <Frame data={{name: "Interestellar", rating: "4"}}/>
                <Frame data={{name: "Interestellar", rating: "4"}}/>
                <Frame data={{name: "Interestellar", rating: "4"}}/>
                <Frame data={{name: "Interestellar", rating: "4"}}/>
            </Content>
        </Container>
    )
}