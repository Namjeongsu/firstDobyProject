import React from 'react'

import classNames from "classnames";
import UserForm from "../components/molecules/UserForm";
import '../styles/LoginForm.scss';



const LoginPage=()=>
{
    return(

        <div className={classNames("LoginForm")}>
            <p>로그인</p>
        <UserForm/>
        </div>
    )
}
export default LoginPage;