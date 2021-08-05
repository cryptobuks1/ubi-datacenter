import { createSlice } from '@reduxjs/toolkit';

const initialHeaderState = {
    sidebarDrawer: false
};

export const headerSlice = createSlice({
    name: "header",
    initialState: initialHeaderState,
    reducers: {
        sidebarDrawerOpen: (state, action) => {
            state.sidebarDrawer = action.payload.open;
        },
    }
});