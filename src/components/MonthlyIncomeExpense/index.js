import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import { Wrapper, Content } from './MonthlyIncomeExpense.styles';
import { createTheme, Typography, ThemeProvider } from '@mui/material';

import { getAllTransactionsByUser } from '../../store/serviceAPI';
import {useSelector, useDispatch } from "react-redux";
import transactionSlice from "../../store/slices/transactions";
import {calculateMonthlyIncomeExpense} from '../../utils/transactionUtils'

const theme = createTheme({
    typography: {
        fontFamily: "Rubik",
        color: '#fff',
    },
})

export default function MonthlyIncomeExpense() {
    const transactionList = useSelector(state => state.transactions.currentMonthTransactionList);
    const {income, expense} = calculateMonthlyIncomeExpense(transactionList);
    console.log("INCOMEEXPENSE ", income, expense)
    
    return (
        <ThemeProvider theme={theme}>
                    
            <Wrapper>
                <Content>
                    <Grid container spacing={5}>
                        <Grid container item lg={12}>
                            <Typography component="h5" variant="h5">
                                This Month:
                            </Typography>
                        </Grid>
                        <Grid container item lg={12} spacing={4} sx={{pt:0}}>
                            <Grid item xs={12} sm={12} lg={6} sx={{mt:0}}>
                                <div className='income'>
                                    <Grid container item spacing={2}>
                                        <Grid item>
                                            <ArrowCircleDownIcon  className="arrow-icon"/>
                                        </Grid>
                                        <Grid item alignSelf='center'>
                                            {/* <Typography component="h5" variant="h5">
                                                Income
                                            </Typography> */}
                                            <Typography component="h4" variant="h4">
                                                ₹{income}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6} sx={{mt:0}}>
                                <div className='expenditure'>
                                    <Grid container item spacing={2}>
                                        <Grid item>
                                            <ArrowCircleUpIcon  className="arrow-icon"/>
                                        </Grid>
                                        <Grid item alignSelf='center'>
                                            {/* <Typography component="h5" variant="h5">
                                                Expenditure
                                            </Typography> */}
                                            <Typography component="h4" variant="h4">
                                                ₹{expense}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Content>
            </Wrapper>
        </ThemeProvider>
    );
}