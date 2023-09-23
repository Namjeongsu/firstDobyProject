import React from 'react';
import {Route,Routes} from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";

export const AppRouter = () => {
	return(
		<Routes>
			<Route path="/" element={<LoginPage/>}/>
			<Route path="/signup" element={<SignUpPage/>}/>
			<Route path="/home" element={<HomePage/>}/>
			<Route path="/test" element={<TestPage/>}/>
		</Routes>
	)
}
