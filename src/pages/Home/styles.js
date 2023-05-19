import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 116px 132px auto;
    grid-template-areas: 
    "header"
    "title"
    "content";
`;

export const Title = styled.div`
    grid-area: "title";
    padding: 0 12.3rem;
    gap: 74.6rem;
    align-items: center;
    justify-content: space-between;
    margin: 5rem ;
    display: flex;
    > h1{
           white-space: nowrap;
           font-size: 3.2rem;
           font-weight: 400;
           text-align: left;
       }
`;
 
export const Content = styled.div`
       grid-area: "content";
       margin: 0 12.3rem;
       overflow-y: scroll;
       scrollbar-width: thin;
       scrollbar-color: ${({theme}) => theme.COLORS.PINK} transparent;
       &::-webkit-scrollbar {
         width: 8px; 
         padding-right: 120px; 
        }

        &::-webkit-scrollbar-track {
        background: transparent;  
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.PINK};    
            border-radius: 8px;
        }
`;

export const AddMovie = styled.button`
    width: 20.7rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: #1C1B1E;
    font-weight: 400;
    font-size: 1.4rem;
    white-space: nowrap;
    line-height: 2.1rem;
    padding: 1.2rem 3.2rem;
    border: none;
    border-radius: 1rem;

    > svg{
        margin-right: 8px;
    }
    
`;

