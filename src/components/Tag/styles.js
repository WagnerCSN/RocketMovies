import styled from "styled-components";

export const Container = styled.div`
    height: 2.4rem;
    border-radius: .8rem;
    padding: .5rem 1.6rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    color: ${({theme}) => theme.COLORS.GRAY_400};
    margin-right: .8rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;


`;