import React from 'react'
import styled from 'styled-components';

const NavBar = () => {
    return (
        <NavBarContainer>
            <LinksContainer>

            </LinksContainer>
            <ShoppingCart>

            </ShoppingCart>
        </NavBarContainer>
    )
}

export default NavBar;

const NavBarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #471633;
  display: flex;
  justify-content: center;
  align-items: center;
  posititon: relative;
`;
const LinksContainer = styled.div`
  height: 55px;
  width: 60%;
  background: red;
`;
const ShoppingCart = styled.div`
  height: 55px;
  width: 55px;
  background: red;
  position: absolute;
  right: 15px;
  align-content: center;
`;

