import { Container } from "./styles";
import estrela from "../../assets/estrela.svg"
import estrela2 from "../../assets/estrela2.svg"
import { useState, useEffect } from "react";

export function Rating({rating, size, ...rest}){
    const [estrelas, setEstrelas] = useState([]);
    let rat = rating;
    console.log(estrelas);
    
    useEffect(() => {
        function estr(){
            if(estrelas.length!==0){
                setEstrelas([]);
            }
                let x =1;
                while(x<=5){
                let test  = rat>0 ? estrela : estrela2;
                    setEstrelas(prevState => [...prevState,test]);
                    rat=rat-1;
                    x++
                }
            
        }
        estr();
    },[rating])


    return(
        <Container {...rest}>
       { 
       estrelas.map((estrela, index) =>((index<5 ) &&
            <img 
                key={String(index)}
                src={estrela}   
                width={size}
            />
            ))
       }
        </Container>
    )
}





