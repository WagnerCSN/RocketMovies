import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem 17.2rem auto;
    grid-template-areas: 
    "header"
    "title"
    "content";
`;

export const Title = styled.div`
    grid-area: "title";
    margin: 4rem 12.3rem 2.4rem 12.3rem;
    > a{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK};
        svg{
            margin-right: .8rem;
        }
    }
    h1{
        font-size: 3.6rem;
        font-weight: 500;
        line-height: 4.7rem;
        text-align: left;
        margin-top: 2.4rem;
    }
`;

export const Content = styled.div`
    grid-area: "content";
    margin-inline: 12.3rem;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK} transparent;
    &::-webkit-scrollbar {
        width: .8rem;
    
    }

    &::-webkit-scrollbar-track {
        background: transparent;  
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.PINK};    
        border-radius: .8rem;
    }
    
    > div{ 
        display: flex;
        gap: 5.6rem;
    }

    > textarea{
        border: none;
        resize: none;
        height: 27.4rem;
        width: 100%;
        border-radius: 1rem;
        padding: 1.9rem 1.6rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-top: 4rem;
        font-size: 1.6rem;
        
        &::placeholder{
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-weight: 400;
        }
    }

    > h2{
        font-size: 2.5rem;
        margin-block: 4rem 2.4rem;
    }
    >section{
        display: flex;
        flex-wrap: wrap;
        gap: 4rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
        border-radius: 1rem;
        padding: 1.6rem;
    }
`;

export const Choose = styled.div`
    margin-block: 5rem 9.3rem;

    .excluir{
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
        color: ${({theme}) => theme.COLORS.PINK};
        height: 5.6rem;
        border-radius: 1rem;
        border: none;
        font-size: 1.6rem;
        font-weight: 400;
    }

    .salvar{
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        height: 5.6rem;
        border-radius: 1rem;
        border: none;
        font-size: 1.6rem;
        font-weight: 600;
    }
`


