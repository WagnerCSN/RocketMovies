import styled from "styled-components";
import backgroundImg from "../../assets/backgroundSign.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 13.6rem;
    > h1{
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
    > p{
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    
    > h2{
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin: 4.8rem 0;
    }
    
    > a{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 1.6rem;
        font-weight: 400;
        margin-top: 4.2rem;
        text-align: center;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;