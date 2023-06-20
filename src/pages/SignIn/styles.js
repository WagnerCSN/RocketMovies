import styled from "styled-components";
import backgroundImg from "../../assets/backgroundSign.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    @media (max-width: 1465px){
       
       flex-direction: column;
       min-width: 1381px;
       >div{
        margin: 0 590px 300px;
       } 
       >Form{
          align-items: center;
          padding: 25px 590px;
          height: 50%;
       }
    }
`;

export const Form = styled.form`
    padding: 0 134px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h1{
        font-size: 4.8rem;
        line-height: 6.3rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
    > p{
        font-size: 1.4rem;
        line-height: 1.8rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        
    }
    
    > h2{
        font-size: 2.4rem;
        line-height: 3.1rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin: 48px 0;
    }
    
    > a{
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 1.6rem;
        line-height: 2.1rem;
        font-weight: 400;
        margin-top: 42px;
        text-align: center;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;