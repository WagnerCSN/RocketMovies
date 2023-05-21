import { Container, Brand, Profile } from "./styles";
import { Input } from "../Input"
import { Link } from "react-router-dom";

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

            <Profile to="/profile">
                <div>
                    <span>Wagner Costa</span>
                    <Link>Sair</Link>
                </div>
                <img src="https://www.github.com/WagnerCSN.png" alt="Foto de usuário" />
            </Profile>

        </Container>
    )
}