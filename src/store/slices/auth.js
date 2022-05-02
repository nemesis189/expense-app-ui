import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    token: null, 
    refreshToken: null, 
    account: null, 
    loginFirst: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthTokens(
            state,
            action
        ) {
            state.refreshToken = action.payload.refreshToken;
            state.token = action.payload.token;
        },
        setAccount(state, action) {
            state.account = action.payload;
        },
        setLoginFirst(state, action) {
            state.loginFirst = action.payload.loginFirst;
        },
        logout(state) {
            state.account = null;
            state.refreshToken = null;
            state.token = null;
            state.loginFirst = null;
        },
    },
});

export default authSlice;