
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/auth";
import categoriesSlice from "./slices/categories";
import transactionSlice from "./slices/transactions";
import transactionTypeSlice from "./slices/transaction_types";
import mopSlice from "./slices/mop";
import navbarSlice from "./slices/navbar";

const rootReducer = combineReducers({
	auth: authSlice.reducer,
	categories: categoriesSlice.reducer,
	transactions: transactionSlice.reducer,
	transactionType: transactionTypeSlice.reducer,
	mop: mopSlice.reducer,
	navbar: navbarSlice.reducer,
});

const persistedReducer = persistReducer(
	{
		key: "root",
		version: 1,
		storage: storage,
	},
	rootReducer
);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;