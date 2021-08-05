import React from 'react'
import styled from 'styled-components';
import { Drawer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import { headerSlice } from '../app/modules/Header/headerSlice';

function Sidebar() {
    const { actions } = headerSlice;

    const { currentState } = useSelector(
        (state) => ({ currentState: state.header })
    );
    const { sidebarDrawer } = currentState;

    console.log('sidebarDrawer ', sidebarDrawer);

    const dispatch = useDispatch();
    const closeSidebar = (open) => {
        dispatch(actions.sidebarDrawerOpen({open: open}));
    }

    return (
        // remove disableScrollLock if entire app is distorted
        <Drawer anchor="right" open={sidebarDrawer} onClose={() => closeSidebar(false)} disableScrollLock> 
            <SidebarContent>
                <h1>YAWA</h1>
            </SidebarContent>
        </Drawer>
    )
}

const SidebarContent = styled.div`
    background: white;
    border: 0;
    height: 100vh;
    width: 300px;
    padding: 10px 20px;
`;

export default Sidebar
