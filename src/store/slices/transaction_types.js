import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    transactionTypeList: []
};

const transactionTypeSlice = createSlice({
    name: "transactionType",
    initialState,
    reducers: {
        setTransactionTypeList(state, action) {
            state.transactionTypeList = action.payload;
        }
    },
});

export default transactionTypeSlice;