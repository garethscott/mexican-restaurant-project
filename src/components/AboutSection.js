import React from 'react';
import styled from 'styled-components';
import AboutBgImage from '../images/about-image-small.png'

const AboutSection = () => {
    return (
        <AboutContainer>

        </AboutContainer>
    )
}

export default AboutSection;

const AboutContainer = styled.div`
  width: 100%;
  height: 907px;
  background: url(${AboutBgImage});
  background-position: center;
  margin-top: -20px;
`;


