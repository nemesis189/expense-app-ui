import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    categoryList: []
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategoryList(state, action) {
            state.categoryList = action.payload;
        }
    },
});

export default categoriesSlice;