import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import PriNavLogo from '../images/primary-nav-logo.png';
import MobileLogoImg from '../images/mobile-nav-logo.png';
import MobileMenu from './MobileMenu';
import XLogoImg from '../images/close-logo.png';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  const handleClick = () => setClick(!click);

  const showMenu = () => {
    if (window.innerWidth >= 900) {
      setClick(false);
    }
  }

  window.addEventListener('resize', showMenu);

  const handleShowNavBar = () => {
    if (window.scrollY >= 1) {
      setShowNavBar(true);
    } else if (window.scrollY < 1) {
      setShowNavBar(false);
    }
  }

  window.addEventListener('scroll', handleShowNavBar);

  return (
    <FixedNav showNavBar={showNavBar}>
      <NavBarContainer>
        <LinksContainer>
          <NavLink to="/">BIENVENDIOS</NavLink>
          <NavLink to="/">MENU</NavLink>
          <NavLogo src={PriNavLogo} alt="El Alma Logo" />
          <NavLink to="/">CONTACT</NavLink>
          <NavH1 to="/">WE ARE OPEN</NavH1>
        </LinksContainer>
        <ShoppingCartIcon />
        <MobileLinksContainer>
          <MobileLogo src={MobileLogoImg} alt="El Alma Logo" />
          <MobileIconContainer onClick={handleClick}>
            {click ? <XLogo src={XLogoImg} /> : <BarsLogo />}
          </MobileIconContainer>
        </MobileLinksContainer>
      </NavBarContainer>
      <MobileMenu click={click} handleClick={handleClick} />
    </FixedNav>
  )
}

export default NavBar;
const FixedNav = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  top: ${({ showNavBar }) => (showNavBar ? '0' : '-80px')};
  left: 0px;
  opacity: ${({ showNavBar }) => (showNavBar ? '1' : '0')};
  transition: all 0.5s ease-in-out;
`;
const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #471633;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  posititon: relative;
`;
const LinksContainer = styled.div`
  height: 55px;
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 765px;
  max-width: 1100px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const NavLink = styled(Link)`
  color: #fefefe;
  cursor: pointer;
  font-family: 'Archivo Black';
  font-size: 17px;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #03cefa;
    transition: 0.2s ease-in-out;
}
`;
const NavH1 = styled.h1`
  color: #fefefe;
  cursor: pointer;
  font-family: 'Archivo Black';
  font-size: 17px;
  letter-spacing: 0.1em;
  border-bottom: 2px solid #fefefe;
  margin-top: 20px;
`;
const NavLogo = styled.img`
  height: 55px;
`;
const ShoppingCartIcon = styled(AiOutlineShoppingCart)`
  font-size: 35px;
  color: #fefefe;
  align-content: center;
  position: absolute;
  right: 25px;

  &:hover {
    color: #03cefa;
    transition: 0.4s ease-in-out;
}

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const MobileLinksContainer = styled.div`
  display: none;
  height: 55px;
  width: 92%;

  @media screen and (max-width: 900px) {
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const MobileIconContainer = styled.div`
  display: none;
  height: 35px;
  width: 35px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: block;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
const BarsLogo = styled(FaBars)`
  font-size: 30px;
  color: white;
`;
const XLogo = styled.img`
  width: 25px;
  height: 25px;
`;
const MobileLogo = styled.img`
   height: 40px;
`;




