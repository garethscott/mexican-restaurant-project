import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const LandNavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(true);
        console.log(showMenu);
    }
    const handleHideMenu = () => {
        setShowMenu(false);
        console.log(showMenu);
    }

    console.log(showMenu);

    return (
        <NavBarContainer>
            <LinksContainer>
                <NavLink to="/">BIENVENDIOS</NavLink>
                <NavLink
                    onMouseEnter={handleShowMenu}
                    onMouseOut={handleHideMenu}
                    to="/">MENU
                </NavLink>
                <NavLink to="/">CONTACT</NavLink>
            </LinksContainer>
            <ShoppingCartContainer>
                <ShoppingCartIcon />
            </ShoppingCartContainer>
            <DropDownMenuContainer showMenu={showMenu} onMouseEnter={handleShowMenu} onMouseOut={handleHideMenu}>
                <DropNavLink to="/">TACOS</DropNavLink>
                <DropNavLink to="/">BURRITOS</DropNavLink>
                <DropNavLink to="/">BURGERS</DropNavLink>
                <DropNavLink to="/">SIDES</DropNavLink>
                <DropNavLink to="/">DRNKS</DropNavLink>
            </DropDownMenuContainer>
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
    position: relative;
`;
const LinksContainer = styled.div`
    width: 400px;
    height: 50px;
    // background: yellow;
    display: flex;
    justify-content: flex-end;
    margin-left: 25px;

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
const ShoppingCartContainer = styled.div`
   width: 30px;
   height: 50px;
   margin-right: 25px;
   display: flex;
   justify-content: flex-end;
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
   top: 35px;
   right: 62px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
const DropNavLink = styled(Link)`
   color: rgba(255, 255, 255, 1);
   font-family: 'Archivo Black';
   font-size: 16px;
   margin: 0;
   text-decoration: none;
`;
