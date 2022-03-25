import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from '../SignUpForm'
import LogIn from '../LogInForm'
import TransactionList from '../TransactionList'
import MonthlyIncomeExpense from '../MonthlyIncomeExpense'
import CreateEditTransaction from '../CreateEditTransaction'

export default function Dashboard() {
    return (
        <>
            <MonthlyIncomeExpense />
            <TransactionList />
        </>
    );
}