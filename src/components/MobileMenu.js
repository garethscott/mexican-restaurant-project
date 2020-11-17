import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MobileMenu = ({ click, handleClick }) => {
    return (
        <MobMenuContainer click={click} onClick={handleClick}>
            <LinksContainer>
                <MenuLinks to="/">BIENVENDIOS</MenuLinks>
                <MenuLinks to="/">TACOS</MenuLinks>
                <MenuLinks to="/">BURRITOS</MenuLinks>
                <MenuLinks to="/">BURGERS</MenuLinks>
                <MenuLinks to="/">SIDES</MenuLinks>
                <MenuLinks to="/">DRINKS</MenuLinks>
                <OrderButton to="/">VIEW YOUR ORDER</OrderButton>
            </LinksContainer>
        </MobMenuContainer>
    )
}

export default MobileMenu;

const MobMenuContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${({ click }) => (click ? '#782e5a' : 'transparent')};
  position: fixed;
  top: 80px;
  left: ${({ click }) => (click ? '0' : '-3000px')};
  transition: all 0.5s ease;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;
const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   display: ${({ click }) => (click ? 'none' : 'inline-block')}
`;
const MenuLinks = styled(Link)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Archivo Black';
  letter-spacing: 0.1em;
  color: white;
  cursor: pointer;
  text-decoration: none;
  height: 70px;
  width: 100%;

  &:hover {
      background-color: #03cefa;
      color: #782e5a;
      transition: 0.5s ease-in-out;
  }
`;
const OrderButton = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Archivo Black';
  letter-spacing: 0.1em;
  color: white;
  cursor: pointer;
  text-decoration: none;
  height: 70px;
  width: 90%;
  border: 2px solid #471633;
  margin-top: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #03cefa;
    color: #782e5a;
    transition: 0.5s ease-in-out;
    border: none;
}
`;

