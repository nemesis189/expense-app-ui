import React, {useEffect} from 'react';

import TransactionList from '../TransactionList'
import MonthlyIncomeExpense from '../MonthlyIncomeExpense'
import CreateEditTransaction from '../CreateEditTransaction'
import ResponsiveAppBar from '../AppBar'

import { LogoutButton, Wrapper } from './Dashboard.styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import authSlice from "../../store/slices/auth";
import transactionSlice from "../../store/slices/transactions";
import {useSelector, useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";

import {getAllTransactionsByUser} from "../../store/serviceAPI";

export default function Dashboard() {
    const dispatch = useDispatch();
	const navigate = useNavigate();

    const curr_user = useSelector(state => state.auth.account.u_email)
    useEffect(() => {
        getAllTransactionsByUser(curr_user, (transactions) => {
            dispatch(transactionSlice.actions.setTransactionList(transactions));
        });
    }, [getAllTransactionsByUser, transactionSlice])
    
	const allTransactions = useSelector(state => state.transactions.transactionList.transactions);
	console.log('ALL TRANSACTIONS',allTransactions);

    const handleLogout = () => {
        dispatch(authSlice.actions.logout());
        navigate("/");
    };

    const addTransaction = () => {
        navigate("/create");
    }

    return (
        <Wrapper>
            <ResponsiveAppBar />
            <Grid container>
                <Grid container item xs={12} md={12} >
                    <Grid item xs={12} md={6} >
                        <MonthlyIncomeExpense />
                    
                        <LogoutButton onClick={handleLogout}>
                            <IconButton className="logout" >
                                <LogoutIcon fontSize="inherit"/>
                            </IconButton>
                        </LogoutButton>

                        <LogoutButton onClick={addTransaction}>
                            <IconButton className="addTransaction" >
                                <AddCircleIcon fontSize="inherit"/>
                            </IconButton>
                        </LogoutButton>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <TransactionList transactionList={allTransactions} />
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
}