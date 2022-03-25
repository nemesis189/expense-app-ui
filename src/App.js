import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './components/GlobalStyles';
import SignUp from './components/SignUpForm'
import LogIn from './components/LogInForm'
import Dashboard from './components/Dashboard'
import CreateEditTransaction from './components/CreateEditTransaction'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/create" element={<CreateEditTransaction />} />
				</Routes>
			</Router>
			<GlobalStyle />
		</div>
	);
}

export default App;
