import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 5.6rem;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 500;
    border: none;
    border-radius: 1rem;
    padding: 0 16px;
    text-align: center;
    margin-top: 24px;

`;