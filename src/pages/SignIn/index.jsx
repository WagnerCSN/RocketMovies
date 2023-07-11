import { Container, Wrapper, Form, Background } from "./styles"
import { FiMail, FiLock} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const  {signIn}  = useAuth();
    

    
    function handleSignIn(e){

       e.preventDefault();
        if(!email || !password){
            return alert("Preencha todos os campos!");
        }
        signIn({email, password})

    }

    return(
        <Container >
            <Wrapper>
                <Form>
                        <h1>RocketMovies</h1>
                        <p>Aplicação para acompanhar tudo que assistir.</p>

                        <h2>Faça seu login</h2>

                        <Input 
                            placeholder="E-mail"
                            type="text"
                            icon={FiMail}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input 
                            placeholder="Senha"
                            type="password"
                            icon={FiLock}
                            onChange={e => setPassword(e.target.value)}
                        />
                            
                        <Button title="Entrar" onClick={handleSignIn}/>

                        <Link to={'/register'}>Criar conta </Link>
                    </Form>

                    <Background/>
            </Wrapper>
        </Container>
    )
}
