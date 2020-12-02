import React from 'react';
import styled from 'styled-components';
import MenuCard from './MenuCard';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const MenuSlider = () => {
    return (
        <MenuSliderContainer>
            <PreviousArrow />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <NextArrow />
        </MenuSliderContainer>
    )
}

export default MenuSlider;

const MenuSliderContainer = styled.aside`
    background: lightcoral;
    height: 450px;
    width: 75%;
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;
const PreviousArrow = styled(BiLeftArrow)`
    font-size: 70px;
    color: #fdfdfd;
    position: absolute;
    top: 45%;
    left: -90px;
    cursor: pointer;
`;
const NextArrow = styled(BiRightArrow)`
    font-size: 70px;
    color: #fdfdfd;
    position: absolute;
    top: 45%;
    right: -90px;
    cursor: pointer;
`;
