import React, { useState } from 'react';
import styled from 'styled-components';
import LandImgBig from '../images/landing-img.jpg';
import LandImgSmall from '../images/landing-img-small-1.jpg';
import LandingLogoMedium from '../images/landing-logo-medium.png';
import LandingLogoLarge from '../images/landing-logo-large.png';

const Landing = () => {
  const [swapLandImg, setSwapLandImg] = useState(false);
  const [swapLandLogo, setSwapLandLogo] = useState(false);

  const handleSwapImg = () => {
    if (window.innerWidth > 1795 || window.innerHeight > 1010) {
      setSwapLandImg(true);
      setSwapLandLogo(true);
    } else {
      setSwapLandImg(false);
      setSwapLandLogo(false);
    }
  }

  window.addEventListener('resize', handleSwapImg);

  return (
    <LandingContainer swapLandImg={swapLandImg}>
      {swapLandLogo ? (<LandingLogoLar src={LandingLogoLarge} />) : (<LandingLogoMed src={LandingLogoMedium} />)}
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
  justify-content: center;
  align-items: center;
`;
const LandingLogoMed = styled.img`
  width: min(100%, 685px);
`;
const LandingLogoLar = styled.img`
  width: 900px;
`;