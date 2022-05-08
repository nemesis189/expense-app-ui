import React, {useEffect} from 'react';

import TransactionList from '../TransactionList'
import MonthlyIncomeExpense from '../MonthlyIncomeExpense'
import CreateEditTransaction from '../CreateEditTransaction'
import ResponsiveAppBar from '../AppBar'

import { AddTransaction, Wrapper } from './Dashboard.styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


import authSlice from "../../store/slices/auth";
import transactionSlice from "../../store/slices/transactions";
import {useSelector, useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";

import {filterTransactionsForCurrentMonth} from '../../utils/transactionUtils'
import {getAllTransactionsByUser} from "../../store/serviceAPI";

export default function Dashboard() {
    const dispatch = useDispatch();
	const navigate = useNavigate();
    
    const curr_user = useSelector(state => state.auth.account.u_email)
    useEffect(() => {
        getAllTransactionsByUser(curr_user, (transactions) => {
            dispatch(transactionSlice.actions.setTransactionList(transactions.transactions));
            
            let currMonthTransactionList = filterTransactionsForCurrentMonth(transactions.transactions);
            dispatch(transactionSlice.actions.setCurrentMonthTransactionList(currMonthTransactionList));
        });
    }, [filterTransactionsForCurrentMonth, getAllTransactionsByUser, transactionSlice])
    
    
    const allTransactions = useSelector(state => state.transactions.transactionList);
    console.log('ALL TRANSACTIONS',allTransactions);

    const handleLogout = () => {
        dispatch(authSlice.actions.logout());
        navigate("/");
    };

    const addTransaction = () => {
        navigate("/create");
    }

    return (
        <>
            <ResponsiveAppBar />
            <Wrapper>
                    <Grid container item xs={12} md={12} spacing={5} >
                        <Grid container item md={4}>
                            <Grid item md={12} >
                                <MonthlyIncomeExpense />
                            </Grid>
                            <Grid container item md={12}
                                alignItems="center"
                                justifyContent="center"
                                direction="column"
                            >
                                <AddTransaction onClick={addTransaction}>
                                    <IconButton className='addTransaction'>
                                        <AddCircleIcon fontSize="inherit"/>
                                        <Typography component="h5" variant="h5" sx={{m:'10px'}}>
                                            Create Transaction
                                        </Typography>
                                    </IconButton>
                                </AddTransaction>
                            </Grid>
                        </Grid>
                        
                        <Grid item  md={8}>
                            <TransactionList transactionList={allTransactions} />
                        </Grid>
                    </Grid>
            </Wrapper>
        </>
    );
}