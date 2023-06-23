import styled, {css} from 'styled-components';
import {FiHome, FiSearch, FiBell, FiMail} from "react-icons/fi"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  background-color: green;

  @media(min-width: 500px){
    border-left: 3px solid yellow;
    border-right: 3px solid yellow;
  }
`;


export const Header = styled.div`
    position: sticky;
    top: 0;
    background-color: aqua;
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: left;
    >Button{
       height: 20px;
       width: 40px;
       text-align: left;

        &:hover{
            background: white;
        }

       
    }

`;
 export const  BackIcon = styled.div`
 
 `;
 export const  ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    
 `;

export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid gray;
    padding: 8px min(46px, max(10vw, 10px));

    @media(min-width: 500px){
        display: none;
    }

 `;
 const iconsCSS = css`
    height: 31px;
    width: 31px;
    color: aqua;
    cursor: pointer;

    &:hover, &.active{
        color: red;
    }
`;


 export const HomeIcon = styled(FiHome)`
 ${iconsCSS}
 `;
 export const SearchIcon = styled(FiSearch)`
 ${iconsCSS}
 `;
 export const BellIcon = styled(FiBell)`
 ${iconsCSS}
 `;
 export const EmailIcon = styled(FiMail)`
 ${iconsCSS}
 `;
