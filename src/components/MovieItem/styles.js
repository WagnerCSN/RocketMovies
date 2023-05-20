import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 16px;
    border-radius: 10px;
    background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none'};
    > input{
        color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_100 : 'white'};
        font-size: 1.6rem;
        height: 5.6rem;
        width: 100%;
        background-color: transparent;
        border: none;
    }

    > button{
        margin-right: 8px;
        border: none;
        background-color: transparent;

        svg{
        color: ${({theme}) => theme.COLORS.PINK};
        }
    }
`;