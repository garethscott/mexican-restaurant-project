import React, { useState, useEffect } from 'react';
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
        if (window.scrollY >= 1) {
            setShowAboutImg(true);
        } else if (window.scrollY < 1) {
            setShowAboutImg(false);
        }
    }

    window.addEventListener('scroll', handleShowAboutImg);

    const handleSwapLargeImgFade = () => {
        if (window.scrollY >= 1) {
            setSwapLargeFade(true)
        } else if (window.scrollY < 1) {
            setSwapLargeFade(false)
        }
    }

    const handleSwapBgImg = () => {
        if (window.innerWidth > 1795 || window.innerHeight > 1010) {
            setSwapAboutImg(true);
            window.addEventListener('scroll', handleSwapLargeImgFade);
        } else {
            setSwapAboutImg(false);
        }
    }

    window.addEventListener('resize', handleSwapBgImg);

    useEffect(() => {
        handleSwapBgImg();
    });

    return (
        <AboutContainer
            showAboutImg={showAboutImg}
            swapAboutImg={swapAboutImg}
            swapLargeFade={swapLargeFade}
        >
            <AboutContent>
                <h1>BIENVENDIOS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </AboutContent>
        </AboutContainer >
    )
}

export default AboutSection;

const AboutContainer = styled.div`
  width: 100%;
  height: 801px;
  background: url(${({ showAboutImg }) => (showAboutImg ? AboutBgImage : AboutBgImageNoFade)});
  background-size: cover;
  background-position: center;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${({ showAboutImg }) => showAboutImg && `
    margin-top: -20px;
  `}

  ${({ swapAboutImg }) => swapAboutImg && `
    width: 100%;
    height: 1296px;
    background-size: cover;
    background-position: center;
    background: url(${({ swapLargeFade }) => (swapLargeFade ? LgAboutImg : LgAboutImgNoFade)});
  `}

  ${({ swapLargeFade }) => swapLargeFade && `
    margin-top: -30px;
  `}
`;
const AboutContent = styled.div`
    width: 1000px;
    height: 400px;
    // background: lightcoral;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Archivo Black';
        letter-spacing: 0.15em;
        font-size: 50px;
        margin: 0;
        color: #471633;
        color: white;
        height: 58px;
        border-bottom: 5px solid white;
        width: 460px;
    }
    p {
        font-family: 'Archivo Black';
        line-height: 1.4em;
        letter-spacing: 0.1em;
        text-align: center;
        // background: yellow;
        margin-top: 33px;
        color: white;
    }
`;


