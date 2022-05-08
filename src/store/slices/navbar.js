import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    selectedPage: null,
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setSelectedPage(state, action) {
            state.selectedPage = action.payload;
        },
    },
});

export default navbarSlice;