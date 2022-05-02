import React from "react";
import { Navigate, Route, RouteProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store";
import authSlice from "../store/slices/auth";
import LogIn from '../components/LogInForm'

const ProtectedRoute = ({ title, children }) => {

	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	console.log('******* AUTH',auth);
	if (auth.account) {
		return children;
	}
	else if (!auth.account) {
		dispatch(authSlice.actions.setLoginFirst({loginFirst: true}));
		// return <LogIn loginFirst="true"/>;
		return <Navigate to={"/"} />;
	} else {
		return <div>Not found</div>;
	}
}
export default ProtectedRoute;