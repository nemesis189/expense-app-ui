import React from 'react';

const monthMap = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

const getMonth = (date) => {
    let split_date = date.split('-');
    let month = parseInt(split_date[1])
    return month;
}

export function filterTransactionsForCurrentMonth(transactionList) {
    console.log('$##$#$#$#$#$', transactionList);
    var filteredTransactions = [];
    const curr_month = (new Date()).getMonth();
    transactionList.map(t => {
        if (curr_month == getMonth(t.tr_date)) {
            filteredTransactions.push(t);
        }
    });
    console.log('UTILS TRANSACTIONS ',filteredTransactions);
    return filteredTransactions;
}

export function calculateMonthlyIncomeExpense(transactions) {
    let income= 0;
    let expense = 0;
    transactions.map(t => {
        if(t.tr_type__tr_type == 'Income') {
            income += t.tr_amount;
        } else {
            expense += t.tr_amount;
        }
    });

    return {income, expense};
}