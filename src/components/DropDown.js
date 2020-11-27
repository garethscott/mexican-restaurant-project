import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DropDownItems } from './DropDownItems';

const DropDown = (props) => {
    return (
        <DropDownContainer showdropdown={props.showdropdown}>
            <NavContainer>
                {DropDownItems.map((item, index) => {
                    return (
                        <LinkContainer key={index}>
                            <DropDownLink to={item.path}>{item.title}</DropDownLink>
                        </LinkContainer>
                    )
                })}
            </NavContainer>
        </DropDownContainer>
    )
}

export default DropDown;

const DropDownContainer = styled.nav`
   width: 200px;
   height: 170px;
   background: #782e59;
   position: fixed;
   top: ${({ showDropDown }) => (showDropDown ? '80px' : '-100px')};
   right: 1060px;
   border-radius: 0px 0px 5px 5px;
   z-index: -50;
`;
const NavContainer = styled.ul`
   height: 140px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 0;
`;
const LinkContainer = styled.li`
   list-style-type: none;
`;
const DropDownLink = styled(Link)`
   text-decoration: none;
   color: #fefefe;
   cursor: pointer;
   font-family: 'Archivo Black';
   font-size: 17px;
   letter-spacing: 0.1em;
   text-decoration: none;
   cursor: pointer;
   margin-left: 15px;

   &:hover {
     color: #03cefa;
     transition: 0.2s ease-in-out;
}
`;
