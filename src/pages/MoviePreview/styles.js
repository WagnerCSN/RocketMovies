import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px 61px auto;
    grid-template-areas: 
    "header"
    "title"
    "content";
`;

export const Title = styled.div`
    grid-area: "title";
    padding:  0 123px;
    margin-top: 40px;
    > a{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Content = styled.div`
    grid-area: "content";
    padding: 0 123px;
    margin-top: 24px;
    > div:nth-child(1){
        display: flex;
        gap: 20px;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 24px;
    }

    >div:nth-child(2){
        display: flex;
        font-size: 16px;
        margin-bottom: 40px;
    }
    
    > p{
        text-align: justify;
        font-size: 16px;
    }
`;