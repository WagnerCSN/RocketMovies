import { Container, Avatar } from "./styles";
import { FiArrowLeft} from "react-icons/fi"
import { Input } from "../../components/Input"
import { FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

export function Profile(){
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
                />

                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />

                <Input 
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                />

                <Input 
                placeholder="Nome"
                type="password"
                icon={FiLock}
                />
                    
                <Button title="Salvar"/>
             </form>
        </Container>
    )
}