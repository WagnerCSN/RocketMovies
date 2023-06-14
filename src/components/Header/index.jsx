import { Container, Brand, Profile } from "./styles";
import { Input } from "../Input"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header(){
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;
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
                    <span>{user.name}</span>
                    <Link onClick={signOut}>Sair</Link>
                </div>
                <img src={avatarUrl} alt="Foto de usuário" />
            </Profile>

        </Container>
    )
}