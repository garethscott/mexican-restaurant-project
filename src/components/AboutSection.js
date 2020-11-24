import React, { useState } from 'react';
import styled from 'styled-components';
import AboutBgImage from '../images/about-image-small.png';
import AboutBgImageNoFade from '../images/about-image-small-nofade.png'
import LgAboutImg from '../images/lg-about-img.png';
import LgAboutImgNoFade from '../images/lg-about-img-nofade.png';

const AboutSection = () => {
    const [swapAboutImg, setSwapAboutImg] = useState(false);
    const [showAboutImg, setShowAboutImg] = useState(false);
    const [swapLargeFade, setSwapLargeFade] = useState(false);

    const handleShowAboutImg = () => {
        if (window.scrollY > 50) {
            setShowAboutImg(true);
            setSwapLargeFade(true);
        } else if (window.scrollY < 10) {
            setShowAboutImg(false);
            setSwapLargeFade(false);
        }
    }

    window.addEventListener('scroll', handleShowAboutImg);

    const handleSwapBgImg = () => {
        if (window.innerWidth > 1795 || window.innerHeight > 1010) {
            setSwapAboutImg(true);
        } else {
            setSwapAboutImg(false);
        }
    }


    window.addEventListener('resize', handleSwapBgImg);

    return (
        <AboutContainer
            showAboutImg={showAboutImg}
            swapAboutImg={swapAboutImg}
            swapLargeFade={swapLargeFade}>

        </AboutContainer >
    )
}

export default AboutSection;

const AboutContainer = styled.div`
  width: 100%;
  height: 907px;
  background: url(${({ showAboutImg }) => (showAboutImg ? AboutBgImage : AboutBgImageNoFade)});
  background-position: center;
  margin-top: 0px;
  
  ${({ showAboutImg }) => showAboutImg && `
    margin-top: -20px;
  `}

  ${({ swapAboutImg }) => swapAboutImg && `
  background: url(${LgAboutImgNoFade});
  width: 100%;
  height: 1296px;
    // background: url(${({ swapLargeFade }) => (swapLargeFade ? LgAboutImg : LgAboutImgNoFade)});
  `}
`;


