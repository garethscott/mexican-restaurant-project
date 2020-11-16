import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MobileMenu = ({ click, handleClick }) => {
    return (
        <MobMenuContainer click={click} onClick={handleClick}>
            <MenuLinks to="/">BIENVENDIOS</MenuLinks>
            <MenuLinks to="/">TACOS</MenuLinks>
            <MenuLinks to="/">BURRITOS</MenuLinks>
            <MenuLinks to="/">BURGERS</MenuLinks>
            <MenuLinks to="/">SIDES</MenuLinks>
            <MenuLinks to="/">DRINKS</MenuLinks>
            <OrderButton to="/">YOUR ORDER</OrderButton>
        </MobMenuContainer>
    )
}

export default MobileMenu


const MobMenuContainer = styled.div`
  display: none;
  text-align: center;
  width: 100%;
  height: 100vh;
  background: ${({ click }) => (click ? '#782e5a' : 'transparent')};
  position: fixed;
  top: 80px;
  left: ${({ click }) => (click ? '0' : '-1000px')};
  opacity: 1;
  transition: all 0.5s ease;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;
const MenuLinks = styled(Link)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Archivo Black';
  color: white;
  cursor: pointer;
  text-decoration: none;
  height: 70px;
  width: 100%;

  &:hover {
      background-color: lightblue;
      color: #782e5a;
      transition: 0.5s ease-in-out;
  }
`;
const OrderButton = styled(Link)`
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Archivo Black';
color: white;
cursor: pointer;
text-decoration: none;
height: 70px;
width: 50%;

&:hover {
    background-color: lightblue;
    color: #782e5a;
    transition: 0.5s ease-in-out;
}
`;

