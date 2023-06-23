import React from 'react';
import {FaHome } from "react-icons/fa"
import {Button} from "../Button"

 import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

export function Main() {
  return (
    <Container>
        <Header>
            <button>
                <FaHome/>
            </button>

            <ProfileInfo>
                <strong>Wagner Costa</strong>
                <span>612 tweets</span>
            </ProfileInfo>

        </Header>

        {/* <ProfilePage/> */}

        <BottomMenu> 
            <HomeIcon className='active'/>
            <SearchIcon/>
            <BellIcon/>
            <EmailIcon/>
        </BottomMenu> 


    </Container>
  );
}

