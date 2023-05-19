import { Container, AddMovie } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Frame } from "../../components/Frame"

export function Home(){
    return(
        <Container>
            <Header/>
            <header>
                <h1>Meus filmes</h1>
                <AddMovie> 
                    <FiPlus size={20}/>
                     Adicionar filme 
                </AddMovie>
            </header>

            <main>
                <Frame data={{title: 'Interestellar', rating: '3'}}/>
            </main>
        </Container>
    )
}