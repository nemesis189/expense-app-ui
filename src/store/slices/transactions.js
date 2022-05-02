import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    transactionList: []
};

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        setTransactionList(state, action) {
            state.transactionList = action.payload;
        }
    },
});

export default transactionSlice;