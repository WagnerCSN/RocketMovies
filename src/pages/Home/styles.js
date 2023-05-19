import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    header{
        padding: 0 12.3rem;
        display: flex;
        gap: 74.6rem;
        align-items: center;
        justify-content: space-between;
        margin-top: 5rem;
        > h1{
           
            white-space: nowrap;
            font-size: 3.2rem;
            font-weight: 400;
            text-align: left;
            
        }
    }
`;

export const AddMovie = styled.button`
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: #1C1B1E;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    padding: 1.2rem 3.2rem;
    border: none;
    border-radius: 1rem;

    > svg{
        margin-right: 8px;
    }
    
`;

