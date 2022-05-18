
const getMonthYearFromDate = (date) => {
    let split_date = date.split('-');
    let month = parseInt(split_date[1])
    let year = parseInt(split_date[0])
    return [month, year];
}

export function filterTransactionsForCurrentMonth(transactionList) {
    console.log('$##$#$#$#$#$', transactionList);
    var filteredTransactions = [];
    const curr_month = (new Date()).getMonth() + 1;
    const curr_year = (new Date()).getFullYear();
    transactionList.map(t => {
        const [month, year] = getMonthYearFromDate(t.tr_date);
        console.log('MOONTH HSADH HSADYEARRA SEA ',curr_month,month, curr_year,year);
        if (curr_month == month && curr_year == year) {
            filteredTransactions.push(t);
        }
    });
    console.log('UTILS TRANSACTIONS ',filteredTransactions);
    return filteredTransactions;
}

export function calculateIncomeExpense(transactions) {
    let income= 0;
    let expense = 0;
    transactions.map(t => {
        if(t.tr_type__tr_type_name == 'Income') {
            income += t.tr_amount;
        } else {
            expense += t.tr_amount;
        }
    });

    return {income, expense};
}

const monthMap = {
    '_1': 'January',
    '_2': 'February',
    '_3': 'March',
    '_4': 'April',
    '_5': 'May',
    '_6': 'June',
    '_7': 'July',
    '_8': 'August',
    '_9': 'September',
    '_10': 'October',
    '_11': 'November',
    '_12': 'December'
}

export function getMonthWiseOptionList(transactions) {
    var monthOptionList = [];
    for (var key in transactions) {
        Object.keys(transactions[key]).map(month => {
            monthOptionList.push({
                month: monthMap[month],
                year: key.replace('_', ''),
                key: [month, key]
            });
        })
    }

    return monthOptionList;
}

// export function