import * as React from 'react';
import SideBar from '../SideBar';
import ResponsiveAppBar from '../AppBar';

import {useSelector, useDispatch } from "react-redux";
import {getMonthWiseOptionList} from '../../utils/transactionUtils';

//styles
import {Wrapper} from './ReportsPage.styled';


export default function ReportsPage() {
    const periodWiseTransactionList = useSelector(state => state.transactions.periodWiseTransactionList);
    var monthOptionList = getMonthWiseOptionList(periodWiseTransactionList);
    
    console.log("OPTIONS LIST HERE :::::::::::::: ",periodWiseTransactionList);
    return (
        <>
            <ResponsiveAppBar />
            <Wrapper>
                <SideBar 
                    transactions={periodWiseTransactionList}
                    monthOptionList={monthOptionList}
                />
            </Wrapper>
        </>
    );
}