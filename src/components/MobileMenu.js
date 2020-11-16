import React from 'react';
import styled from 'styled-components';

const MobileMenu = ({ click, handleClick }) => {
    return (
        <MobMenuContainer click={click} handleClick={handleClick}>

        </MobMenuContainer>
    )
}

export default MobileMenu


const MobMenuContainer = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  background: lightblue;
  position: fixed;
  top: 80px;
  left: ${({ click }) => (click ? '0' : '-1000px')};
  opacity: 1;
  transition: all 0.5s ease;

  @media screen and (max-width: 900px) {
    display: block;
    opacity: 1;
  }
`;
