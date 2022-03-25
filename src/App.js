import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './components/GlobalStyles';
import SignUp from './components/SignUpForm'
import LogIn from './components/LogInForm'
import TransactionList from './components/TransactionList'
import MonthlyIncomeExpense from './components/MonthlyIncomeExpense'
import CreateEditTransaction from './components/CreateEditTransaction'

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			{/* <SignUp /> */}
			{/* <LogIn /> */}
			<CreateEditTransaction />
			{/* <MonthlyIncomeExpense /> */}
			{/* <TransactionList /> */}
		</div>
	);
}

export default App;
