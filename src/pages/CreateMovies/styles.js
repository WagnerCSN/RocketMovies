import styled from "styled-components";

export const Container = styled.div`
    margin: 0 123px;
> a{
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.PINK};

    svg{
        margin-right: 8px;
    }
}
`;

export const Content = styled.div`
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
    
    &::placeholder{
        font-size: 1.6rem;
    }
}
`;