import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px;
    margin-bottom: 24px;
    height: 222px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    >div{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        height: 52px;
        h1{
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.PINK};
        }
        span{
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 1.6rem;
            
        }
    }

    main{
        p{
            height: 52px;
            font-size: 16px;
            font-weight: 400;
            line-height: 18px;
            margin-bottom: 15px;
            overflow: hidden;
            text-overflow: clip;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-align: justify;
            padding: 15px 0;
        }
    }
    footer{
        display: flex;
        margin-right: 8px;
    }
`;