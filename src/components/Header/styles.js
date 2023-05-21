import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    grid-area: "header";
    width: 100%;
    height: 11.6rem;
    display: flex;
    gap: 6.4rem;
    padding: 2.4rem 12.3rem;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
    align-items: center;
    justify-content: space-around;
`;

export const Brand = styled.div`
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 3.1rem;
    background: transparent;
    color: ${({theme}) => theme.COLORS.PINK};
`;
export const Profile = styled(Link)`
    display: flex;
    gap: 0.9rem;
    > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span{
            white-space: nowrap; //não permite quebrar linha
            font-size: 1.4rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.WHITE};
        }

        a{
            font-size: 1.4rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            align-self: end;
        }
    }

    img{
        height: 5.6rem;
        width: 5.6rem;
        border-radius: 50%;
    }
`;