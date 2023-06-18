import { Container, Brand, Profile} from "./styles";
import { Input } from "../Input"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useState, useEffect } from "react";

export function Header({childToParent}){
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;
    const [search, setSearch] = useState("");

    useEffect(() => {
        if(search){

            childToParent(search);
        }
       
    }, [search]);
   
    return(
        <Container >
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Input
                placeholder="Pesquisar pelo título"
                type="text"
                onChange={e=>setSearch(e.target.value)}
                value={search}
            />

            <Profile to="/profile">
                <div>
                    <span>{user.name}</span>
                    <Link onClick={signOut}>Sair</Link>
                </div>
                <img src={avatarUrl} alt={user.name} />
            </Profile>
        </Container>
    )
}