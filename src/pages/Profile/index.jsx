import { Container, Avatar } from "./styles";
import { FiArrowLeft} from "react-icons/fi"
import { Input } from "../../components/Input"
import { FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Profile(){
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordNew, setPasswordNew] = useState("");
    const [passwordOld, setPasswordOld] = useState("");

    async function handleUpdate(e){
        e.preventDefault();
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }
        
        await updateProfile({user});
    }
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
            </header>
            
            <form>
                <Avatar>
                    <img src="https://www.github.com/WagnerCSN.png" alt="Imagem de usuário" />

                    <label htmlFor="avatar">
                        <FiCamera size={20}/>
                        <input 
                            type="file" 
                            id="avatar" 
                        />
                    </label>
                </Avatar>

                <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                placeholder="Senha Nova"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
                />
                    
                <Button title="Salvar" onClick={handleUpdate}/>
             </form>
        </Container>
    )
}