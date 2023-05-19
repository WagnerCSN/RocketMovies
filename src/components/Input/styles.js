import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    line-height: 2.1rem;
    font-weight: 400;
    border-radius: 10px;
    border: none;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    
    > input{
        width: 100%;
        height: 5.6rem;
        background: transparent;
        border: none;
        padding: 1.2rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};

    }
    
    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > svg {
        margin-left: 1.6rem;
    }
`;