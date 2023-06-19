import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 11.6rem 6.1rem auto;
    grid-template-areas: 
    "header"
    "title"
    "content";
`;

export const Title = styled.div`
    grid-area: "title";
    padding:  0 12.3rem;
    margin-top: 4rem;
    > a{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Content = styled.div`
    grid-area: "content";
    padding: 0 12.3rem;
    margin-top: 2.4rem;
    > div:nth-child(1){
        display: flex;
        gap: 2rem;
        font-size: 3.6rem;
        font-weight: 500;
        margin-bottom: 2.4rem;
    }

    > div:nth-child(2){
        display: flex;
        font-size: 1.6rem;
        margin-bottom: 4rem;
    }
    
    > p{
        text-align: justify;
        font-size: 1.6rem;
        margin-top: 40px;
    }

    #data_user{
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 24px a 400px;
        span{
            font-size: 1.6rem;
        }
        img{
            height: 16px;
            width: 16px;
            border-radius: 25%;
        }

        #rating{
            font-size: 1.6rem;
        }

        #user{
            display: flex;
            font-size: 1.6rem;
            gap:0px;
        }
    }
`;