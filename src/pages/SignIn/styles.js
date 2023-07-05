import styled from "styled-components";
import backgroundImg from "../../assets/backgroundSign.png"

export const Container = styled.div`

    display: flex;
    justify-content: stretch;
    height: 100%;
    justify-content: center;
`;

export const Wrapper = styled.div`
    
    display: flex;
    width: max(576px, 100%);
    width: min(1100px, 100%);
    margin: 0 auto;

  @media(max-width: 810px){
 
    display: flex;
    flex-direction: column;
  }
`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    > h1{
        font-size: clamp(1em, 1em + 4vw, 10.5em);
        line-height: 6.3rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
    > p{
        font-size: clamp(1em, 1em + 1vw, 1.4rem);
        line-height: 1.8rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    
    > h2{
        font-size: clamp(1em, 1em + 4vw, 2.4rem);
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

    @media(max-width: 810px){
        padding: 10px 30px;
        gap: 5px;
        > h1{
        font-size: clamp(1em, 1em + 4vw, 10.5em);
        }
        > p{
        font-size: clamp(1em, 1em + 1vw, 1.4rem);
        }
        > h2{
        margin: 22px 0;
    }

    > a{
        margin-top: 20px;
    }
  }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    @media(max-width: 810px){
        order:-1;
        margin-inline: 30px;
        margin-top: 10px;
    }
`;
