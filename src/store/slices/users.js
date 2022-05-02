import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    user_list: null
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUserList(state, action) {
            state.user_list = action.payload;
        }
    },
});

export default userSlice;