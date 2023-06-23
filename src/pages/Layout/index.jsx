import React from 'react';

import { Container, Wrapper } from './styles';
import { Main } from "../../components/Main"
export function Layout() {
  return (
        <Container>
            <Wrapper>
                {/* <MenuBar/> */}
                <Main/>
                {/* <SideBar/> */}
            </Wrapper>
        </Container>

  )
}

