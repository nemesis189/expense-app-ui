import React, {useEffect} from 'react';

import TransactionList from '../TransactionList'
import IncomeExpenseBoard from '../IncomeExpenseBoard'
import ResponsiveAppBar from '../AppBar'

import { AddTransaction, Wrapper } from './Dashboard.styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


import { useNavigate  } from "react-router-dom";
import useSetAllTransactions from '../../hooks/useSetAllTransactions';


export default function Dashboard() {
    const navigate = useNavigate();

    const [allTransactions, orderedByTimePeriod] = useSetAllTransactions();
    console.log('ALL TRANSACTIONS',allTransactions, orderedByTimePeriod);

    const addTransaction = () => {
        navigate("/create");
    }

    return (
        <>
            <ResponsiveAppBar />
            <Wrapper>
                    <Grid container item xs={12} md={12} spacing={5} >
                        <Grid container item md={4} >
                            <Grid item md={12} >
                                <IncomeExpenseBoard />
                            </Grid>
                            <Grid container item md={12}
                                alignItems="center"
                                justifyContent="center"
                                direction="column"
                            >
                                <AddTransaction >
                                    <IconButton className='addTransaction' onClick={addTransaction}>
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