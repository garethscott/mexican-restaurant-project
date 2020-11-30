import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const LandNavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [menuWhite, setMenuWhite] = useState('rgba(255, 255, 255, 0.6)');

    const handleShowMenu = () => {
        setShowMenu(true);
        setMenuWhite('rgba(255, 255, 255, 1)');
    }

    const handleHideMenu = () => {
        setShowMenu(false);
        setMenuWhite('rgba(255, 255, 255, 0.6)');
    }

    return (
        <NavBarContainer showMenu={showMenu}>
            <LinksContainer>
                <NavLink to="/">BIENVENDIOS</NavLink>
                <MenuLink
                    onMouseEnter={handleShowMenu}
                    onMouseLeave={handleHideMenu}
                    menuwhite={menuWhite}
                    to="/">MENU
                </MenuLink>
                <NavLink to="/">CONTACT</NavLink>
                <DropDownMenuContainer
                    showMenu={showMenu}
                    onMouseEnter={handleShowMenu}
                    onMouseLeave={handleHideMenu}
                >
                    <DropNavLink to="/">TACOS</DropNavLink>
                    <DropNavLink to="/">BURRITOS</DropNavLink>
                    <DropNavLink to="/">BURGERS</DropNavLink>
                    <DropNavLink to="/">SIDES</DropNavLink>
                    <DropNavLink to="/">DRINKS</DropNavLink>
                </DropDownMenuContainer>
            </LinksContainer>
            <ShoppingCartContainer>
                <ShoppingCartIcon />
            </ShoppingCartContainer>
        </NavBarContainer>
    )
}

export default LandNavBar;

const NavBarContainer = styled.nav`
    margin-top: 10px;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;
const LinksContainer = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    margin-left: 25px;
    position: relative;

`;
const NavLink = styled(Link)`
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    font-family: 'Archivo Black';
    font-size: 16px;
    letter-spacing: 0.1em;
    text-decoration: none;
    cursor: pointer;   
    margin-top: 8px;
    margin-right: 25px;

    &:hover {
      color: rgba(255, 255, 255, 1);;
      transition: 0.3s ease-in-out;
}
`;
const MenuLink = styled(Link)`
    color: ${props => props.menuwhite};
    cursor: pointer;
    font-family: 'Archivo Black';
    font-size: 16px;
    letter-spacing: 0.1em;
    text-decoration: none;
    cursor: pointer;   
    margin-top: 8px;
    margin-right: 25px;
`;
const ShoppingCartContainer = styled.div`
   width: 30px;
   height: 50px;
   margin-right: 25px;
   display: flex;
   justify-content: flex-end;
   cursor: pointer;
`;
const ShoppingCartIcon = styled(AiOutlineShoppingCart)`
   font-size: 35px;
   color: rgba(255, 255, 255, 0.6);
   align-content: center;

   &:hover {
    color: rgba(255, 255, 255, 1);;
    transition: 0.3s ease-in-out;
}
`;
const DropDownMenuContainer = styled.nav` 
    height: 115px;
    width: 200px;
    padding-left: 20px;
    visibility: ${({ showMenu }) => (showMenu ? 'visible' : 'hidden')};
    position: absolute;
    top: 33px;
    right: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const DropNavLink = styled(Link)`
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Archivo Black';
    font-size: 16px;
    margin: 0;
    text-decoration: none;

    &:hover {
      color: rgba(255, 255, 255, 1);
      transition: 0.2s ease-in-out;
}
`;
