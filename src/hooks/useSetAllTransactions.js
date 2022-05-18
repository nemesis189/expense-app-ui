
import React, {useEffect} from 'react';

import {useSelector, useDispatch } from "react-redux";

import {getAllTransactionsByUser} from "../store/serviceAPI";
// import {getAllTransactionsByUser} from "../../store/serviceAPI";
import {getTransactionCategories, getTransactionTypes, getMopList, createNewTransaction, updateTransaction} from '../store/serviceAPI';
import categoriesSlice from "../store/slices/categories";
import transactionTypeSlice from "../store/slices/transaction_types";
import mopSlice from "../store/slices/mop";
import transactionSlice from "../store/slices/transactions";


export default function useSetAllTransactions() {

    const dispatch = useDispatch();
        
    const curr_user = useSelector(state => state.auth.account.u_email)

    let dependencies = [getAllTransactionsByUser, transactionSlice,
                        getTransactionCategories, categoriesSlice, getTransactionTypes,
                        transactionTypeSlice, getMopList, mopSlice]
    useEffect(() => {
        getAllTransactionsByUser(curr_user, (allTransactionsList, periodWiseTransactionList) => {
            console.log('INSID GEtALLTRANS DISPATCH',periodWiseTransactionList);
            dispatch(transactionSlice.actions.setTransactionList(allTransactionsList));
            dispatch(transactionSlice.actions.setPeriodWiseTransactionList(periodWiseTransactionList));
        });

        getTransactionCategories((categories) => {
            // console.log('getTransactionCategories');
            dispatch(categoriesSlice.actions.setCategoryList(categories));
        });
        
        getTransactionTypes((types) => {
            // console.log('getTransactionTypes');
            dispatch(transactionTypeSlice.actions.setTransactionTypeList(types));
        });
        
        getMopList((mop) => {
            // console.log('getMopList');
            dispatch(mopSlice.actions.setMopList(mop));
        });
    }, dependencies);

    const allTransactions = useSelector(state => state.transactions.transactionList);
    const orderedByTimePeriod = useSelector(state => state.transactions.periodWiseTransactionList);
    return [allTransactions, orderedByTimePeriod]
}

