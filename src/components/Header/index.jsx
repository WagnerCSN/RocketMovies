import { Container, Brand, Profile } from "./styles";
import { Input } from "../Input"

export function Header(){
    return(
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Input
            placeholder="Pesquisar pelo título"
            type="text"
            />

            <Profile>
                <div>
                    <span>Wagner Costa</span>
                    <a href="#">Sair</a>
                </div>
                <img src="https://www.github.com/WagnerCSN.png" alt="Foto de usuário" />
            </Profile>

        </Container>
    )
}