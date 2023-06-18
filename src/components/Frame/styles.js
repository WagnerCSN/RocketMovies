import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: start;
    flex-direction: column;
    border:none;
    gap: 2.4rem;
    padding: 3.2rem;
    margin-bottom: 2.4rem;
    height: 22.2rem;
    width: 100%;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    >div{
        display: flex;
        align-items: start;
        flex-direction: column;
        gap: .5rem;
        width: 100%;
        height: 5.2rem;
        h1{
            font-size: 2.4rem;
            color: ${({theme}) => theme.COLORS.PINK};
        }
        span{
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 1.6rem;
        }
    }

    main{
        p{
            height: 5.2rem;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.8rem;
            overflow: hidden;
            text-overflow: clip;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-align: justify;
            padding: 1.5rem 0;
        }
    }
    footer{
        display: flex;
        margin-right: .8rem;
        padding-bottom: 32px;
    }
`;