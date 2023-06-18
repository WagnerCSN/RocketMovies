import { Container } from "./styles";
import estrela from "../../assets/estrela.svg"
import { useState } from "react";

export function Rating({rating, size}){
    const estrelas = [estrela, estrela, estrela, estrela, estrela];

    return(
        <Container>
       { 
        estrelas.map((estrela, index) =>(index<rating&&
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