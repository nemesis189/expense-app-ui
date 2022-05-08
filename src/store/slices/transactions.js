import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    transactionList: [],
    currentMonthTransactionList: [],
};

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        setTransactionList(state, action) {
            state.transactionList = action.payload;
        },
        setCurrentMonthTransactionList(state, action) {
            state.currentMonthTransactionList = action.payload;
        },
    },
});

export default transactionSlice;