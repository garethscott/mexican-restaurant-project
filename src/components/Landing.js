import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LandImgBig from '../images/landing-img.jpg';
import LandImgSmall from '../images/landing-img-small-1.jpg';
import LandingLogoMedium from '../images/landing-logo-medium.png';
import LandingLogoLarge from '../images/landing-logo-large.png';
import LandNavBar from './LandNavBar';
import { BsChevronDown } from 'react-icons/bs';



const Landing = () => {
  const [swapLandImg, setSwapLandImg] = useState(false);
  const [swapLandLogo, setSwapLandLogo] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  const handleSwapImg = () => {
    if (window.innerWidth > 1795 || window.innerHeight > 1010) {
      setSwapLandImg(true);
      setSwapLandLogo(true);
    } else {
      setSwapLandImg(false);
      setSwapLandLogo(false);
    }
  }

  useEffect(() => {
    handleSwapImg();
  }, []);

  window.addEventListener('resize', handleSwapImg);

  const handleHideLogo = () => {
    if (window.scrollY >= 100) {
      setHideLogo(true);
    } else if (window.scrollY < 100) {
      setHideLogo(false);
    }
  }

  window.addEventListener('scroll', handleHideLogo);

  return (
    <LandingContainer
      swapLandImg={swapLandImg}
    >
      <LandNavBar />
      <LogoContainer hideLogo={hideLogo}>
        {swapLandLogo ?
          (<LandingLogoLar src={LandingLogoLarge} />
          ) : (
            <LandingLogoMed src={LandingLogoMedium} />)}
      </LogoContainer>
      <DownArrowContainer hideLogo={hideLogo}>
        <DownArrowLogo />
      </DownArrowContainer>
    </LandingContainer>
  )
}

export default Landing;

const LandingContainer = styled.div`
  background-image: url(${({ swapLandImg }) => (swapLandImg ? LandImgBig : LandImgSmall)});
  backgound-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  // display: none;
`;
const LogoContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ hideLogo }) => (hideLogo ? '0' : '1')};
  transition: all 0.7s ease-in-out;
`;
const LandingLogoMed = styled.img`
  width: min(100%, 850px);

  @media screen and (max-height: 540px) {
    height: min(100%, 685px);
    width: auto;
  }
`;
const LandingLogoLar = styled.img`
  width: 1050px;

  @media screen and (max-width: 900px) {
    width: min(100%, 1050px);
  }
`;
const DownArrowContainer = styled.div`
  opacity: ${({ hideLogo }) => (hideLogo ? '0' : '1')};
  transition: all 1s ease-in-out;
`;
const DownArrowLogo = styled(BsChevronDown)`
  color: rgba(255, 255, 255);
  font-size: 100px;
  margin-right: 25px;
  margin-bottom: 20px;
  
`;