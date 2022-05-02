import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    mopList: []
};

const mopSlice = createSlice({
    name: "mop",
    initialState,
    reducers: {
        setMopList(state, action) {
            state.mopList = action.payload;
        }
    },
});

export default mopSlice;