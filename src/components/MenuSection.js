import React from 'react';
import styled from 'styled-components';
import MenuSlider from './MenuSlider';

const MenuSection = ({ heading }) => {
    return (
        <MenuContainer>
            <MenuHeadingH1>{heading}</MenuHeadingH1>
            <MenuSlider />
        </MenuContainer>
    )
}

export default MenuSection;

const MenuContainer = styled.div`
    height: 800px;
    width: 100%;
    background: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MenuHeadingH1 = styled.h1`
    font-family: 'Archivo Black';
    letter-spacing: 0.15em;
    font-size: clamp(1.6rem, 3vw, 12rem);
    margin: 0;
    color: #fdfdfd;
    padding-bottom: 3px; 
    border-bottom: 5px solid #fdfdfd;
    background: lightcoral;
`;



