import React from 'react';
import {Route,Routes} from 'react-router-dom';
import LoginPage from "../components/pages/LoginPage";
import SignUpPage from "../components/pages/SignUpPage";
import HomePage from "../components/pages/HomePage";

export const AppRouter = () => {
	return(
		<Routes>
			<Route path="/" element={<LoginPage/>}/>
			<Route path="/signup" element={<SignUpPage/>}/>
			<Route path="/home" element={<HomePage/>}/>
		</Routes>
	)
}
