import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './components/GlobalStyles';
import SignUp from './components/SignUpForm'
import LogIn from './components/LogInForm'
import Dashboard from './components/Dashboard'
import CreateEditTransaction from './components/CreateEditTransaction'
import ReportsPage from './components/ReportsPage';

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import store, { persistor } from "./store";

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<div className="App">
					<Router>
						<Routes>
							<Route path="/" element={<LogIn />} />
							<Route path="/signup" element={<SignUp />} />
							<Route exact path="/dashboard" element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>} 
							/>
							<Route exact path="/create" element={
								<ProtectedRoute>
									<CreateEditTransaction />
								</ProtectedRoute>} 
							/>
							<Route exact path="/reports" element={
								<ProtectedRoute>
									<ReportsPage />
								</ProtectedRoute>} 
							/>
						</Routes>
					</Router>
					<GlobalStyle />
				</div>
			</PersistGate>
		</Provider>
	);
}

export default App;
