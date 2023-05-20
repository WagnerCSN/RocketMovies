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
    margin: 40px 123px 24px 123px;
    > a{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK};
        svg{
            margin-right: 8px;
        }
    }
    h1{
        font-size: 36px;
        font-weight: 500;
        line-height: 47px;
        text-align: left;
        margin-top: 24px;
    }
`;

export const Content = styled.div`
    grid-area: "content";
    margin-inline: 123px;
    overflow-y: auto;
    scrollbar-width: thin;
       scrollbar-color: ${({theme}) => theme.COLORS.PINK} transparent;
       &::-webkit-scrollbar {
         width: 8px;
    
        }

        &::-webkit-scrollbar-track {
        background: transparent;  
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.PINK};    
            border-radius: 8px;
        }
    > div{ 
        display: flex;
        gap: 56px;
    }
    > textarea{
        border: none;
        resize: none;
        height: 274px;
        width: 100%;
        border-radius: 10px;
        padding: 19px 16px 19px 16px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-top: 40px;
        
        &::placeholder{
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-weight: 400;
        }
    }

    > h2{
        font-size: 25px;
        margin-block: 40px 24px;
    }
    >section{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
        border-radius: 10px;
        padding: 16px;
    }
`;

export const Choose = styled.div`
    margin-block: 50px 93px;

    .excluir{
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
        color: ${({theme}) => theme.COLORS.PINK};
        height: 56px;
        border-radius: 10px;
        border: none;
        font-size: 1.6rem;
    }

    .salvar{
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        height: 56px;
        border-radius: 10px;
        border: none;
        font-size: 1.6rem;
    }
`


