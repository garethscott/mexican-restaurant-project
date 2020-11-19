import React, { useState } from 'react';
import styled from 'styled-components';
import LandImgBig from '../images/landing-img.jpg';
import LandImgSmall from '../images/landing-img-small-1.jpg';
import LandingLogoMedium from '../images/landing-logo-medium.png';

const Landing = () => {
  const [swapLandImg, setSwapLandImg] = useState(false);

  const handleSwapImg = () => {
    if (window.innerWidth > 1795 || window.innerHeight > 1010) {
      setSwapLandImg(true);
    } else {
      setSwapLandImg(false);
    }
  }

  window.addEventListener('resize', handleSwapImg);

  return (
    <LandingContainer swapLandImg={swapLandImg}>
      <LandingLogo src={LandingLogoMedium} />
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
const LandingLogo = styled.img`
  // width: 685px;
  width: min(100%, 685px);
`;