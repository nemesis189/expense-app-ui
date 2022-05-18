import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import { Wrapper, Content } from './IncomeExpenseBoard.styles';
import { createTheme, Typography, ThemeProvider } from '@mui/material';

import {useSelector, useDispatch } from "react-redux";
import transactionSlice from "../../store/slices/transactions";
import {calculateIncomeExpense} from '../../utils/transactionUtils'

const theme = createTheme({
    typography: {
        fontFamily: "Rubik",
        color: '#fff',
    },
})

export default function IncomeExpenseBoard(props) {

    var month = props.month;
    var year = props.year;
    const sidebar = props.sidebar;
    
    let current_month = '_' + String((new Date()).getMonth() + 1);
    let current_year = '_' + String((new Date()).getFullYear());

    month = month ? month : current_month;
    year = year ? year : current_year;
    console.log(" HERHERHEHREHRHERHEHR", props, typeof(current_month), month, year, month === undefined);

    const periodWiseTransactionList = useSelector(state => state.transactions.periodWiseTransactionList);
    console.log('PERIOD WISETRASNACITON LIST', periodWiseTransactionList);
    const currentMonthTransactionList = periodWiseTransactionList[year][month];
    const {income, expense} = calculateIncomeExpense(currentMonthTransactionList);
    console.log("INCOMEEXPENSE ", income, expense)
    
    return (
        <ThemeProvider theme={theme}>
                    
            <Wrapper>
                <Content>
                    <Grid container spacing={5}>
                        <Grid container item lg={12}>
                            <Typography component="h6" variant="h6" sx={{fontWeight:900}}>
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
                                            <Typography component="h5" variant="h5">
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
                                            <Typography component="h5" variant="h5">
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