import React from 'react';
import styled from 'styled-components';
import LandingImg from '../images/landing-img.jpg';

const Landing = () => {
    return (
        <LandingContainer>

        </LandingContainer>
    )
}

export default Landing;

const LandingContainer = styled.div`
  background-image: url(${LandingImg});
  backgound-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;