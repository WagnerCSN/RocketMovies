import  styled  from "styled-components" 
export const Container = styled.div`
   width: 100%;
   height: 100vh;
    > header{ 
        width: 100%;
        height: 14.4rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
        padding-left: 12.4rem;

        a{
            display: flex;
            gap: .8rem;
            justify-content: start;
            align-items: center;
            height: 14.4rem;
            width: 100%;
            color:${({theme}) => theme.COLORS.PINK};
            font-size: 1.6rem;
        }
    }

    > form{
        max-width: 34rem;
        margin: -8.5rem auto;
    
        > div:nth-child(3){
            margin-bottom: 2.4rem;
        }
    }
`;

export const Avatar = styled.div`
    width: 18.6rem;
    height: 18.6rem;
    position: relative;
    margin: 0 auto 6.4rem;

    > img{ 
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label{
        background-color: ${({theme}) => theme.COLORS.PINK};
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        right: .7rem;
        bottom: .7rem;
        cursor: pointer;
        position: absolute;

        > input{
            display: none;
        }
    }
`;