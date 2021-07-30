import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Menu({changeColor}) {
    return (
        <MenuContainer>
            <MenuList>
                <NavLink  
                    to="/dashboard" 
                    style={{ textDecoration: 'none' }} 
                    activeClassName={`${!changeColor ? 'active' : 'active__white'}`}
                    className={`${!changeColor ? 'nav__links' : 'nav__links_white'}`}
                >
                    <MenuTitle style={{color: changeColor ? '#7e8299' : 'white' }}>Dashboard</MenuTitle>
                </NavLink>
            </MenuList>
            <MenuList>
                <NavLink to="/libraries" 
                    style={{ textDecoration: 'none' }} 
                    activeClassName={`${!changeColor ? 'active' : 'active__white'}`}
                    className={`${!changeColor ? 'nav__links' : 'nav__links_white'}`}
                >
                    <MenuTitle style={{color: changeColor ? '#7e8299' : 'white' }}>Libraries</MenuTitle>
                </NavLink>
            </MenuList>
        </MenuContainer>
    )
}

const MenuContainer = styled.ul`
    display: flex;
    align-items: stretch;
    padding: 0 .25rem;
    list-style: none;
    flex: 0.6;
    @media screen and (max-width: 768px) {
        display: none
    }
`;

const MenuList = styled.li`
    padding: 10px;
    border-radius: 11px;
    /*&:nth-child(1) {
        padding-left: 30px;
    }
    &:nth-last-child(1) {
        padding-right: 0;
    }*/
`;

const MenuTitle = styled.span`
    color: white;
    font-weight: 500;
    font-size: .8rem;
`;

export default Menu
