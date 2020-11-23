import React, { useState } from 'react';
import styled from 'styled-components';
import AboutBgImage from '../images/about-image-small.png';
import AboutBgImageNoFade from '../images/about-image-small-nofade.png'

const AboutSection = () => {
    const [swapAboutImg, setSwapAboutImg] = useState(false);
    const [showAboutImg, setShowAboutImg] = useState(false);

    const handleShowAboutImg = () => {
        if (window.scrollY > 50) {
            setShowAboutImg(true);
        } else if (window.scrollY < 10) {
            setShowAboutImg(false);
        }
        console.log(window.scrollY);
        // console.log(showAboutImg)
    }

    window.addEventListener('scroll', handleShowAboutImg);



    return (
        <AboutContainer showAboutImg={showAboutImg}>

        </AboutContainer>
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
`;


