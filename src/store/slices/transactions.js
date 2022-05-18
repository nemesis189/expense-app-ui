import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    transactionList: [],
    periodWiseTransactionList: [],
};

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        setTransactionList(state, action) {
            state.transactionList = action.payload;
        },
        setPeriodWiseTransactionList(state, action) {
            state.periodWiseTransactionList = action.payload;
        },
    },
});

export default transactionSlice;