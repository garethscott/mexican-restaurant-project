import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const LandNavBar = () => {
    return (
        <NavBarContainer>
            <LinksContainer>
               <NavLink>BIENVENDIOS</NavLink>
               <NavLink>MENU</NavLink>
               <NavLink>CONTACT</NavLink>
            </LinksContainer>
            <ShoppingCartContainer>
               <ShoppingCartIcon />
            </ShoppingCartContainer>
        </NavBarContainer>
    )
}

export default LandNavBar;

const NavBarContainer = styled.nav`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
   color: #fefefe;
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
//    background: red;
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
