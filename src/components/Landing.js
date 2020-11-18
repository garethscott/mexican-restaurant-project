import React, { useState } from 'react';
import styled from 'styled-components';
import LandImgBig from '../images/landing-img.jpg';
import LandImgSmall from '../images/landing-img-small.jpg';

const Landing = () => {
  const [swapLandImg, setSwapLandImg] = useState(false);

  const handleSwapImg = () => {
    if (window.innerWidth > 1760 || window.innerHeight > 990) {
      setSwapLandImg(true);
    } else {
      setSwapLandImg(false);
    }
  }

  window.addEventListener('resize', handleSwapImg);

  return (
    <LandingContainer swapLandImg={swapLandImg}>

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
`;