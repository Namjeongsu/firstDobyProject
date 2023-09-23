import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import '../../styles/UserInput.scss'
import UserInput from "../atoms/UserInput";
import Button from "../atoms/Button";


const UserForm=()=>
{
    const [id,setId]=useState('');
    const [pw,setPw]=useState('');
    const [accessToken,setAccessToken]=useState('');
    const [refreshToken,setRefreshToken]=useState('');

    const navigate=useNavigate();

    const onIdChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setId(e.target.value)
    }
    const onPwChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPw(e.target.value);
    }
    const onClickLogin= ()=>
    {
        axios.post('https://moviethree.synology.me/back/user/login',{
            id,
            pwd:pw
        }).then(response=>{
            if(response.status===200)
            {
                const {accessToken,refreshToken}=response.data
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
                localStorage.setItem('accessToken',`${accessToken}`)
                localStorage.setItem('refreshToken',`${refreshToken}`)
                navigate("/home");
            }
        }).catch(error=>{
            window.alert(error.message)
        });
    }
    const onClickSignUp=()=>
    {
        navigate("/signup");
    }

    return(
        <>
        <UserInput onChange={onIdChange} ph="아이디를 입력하세요"/>
        <UserInput onChange={onPwChange} type="password" ph="비밀번호를 입력하세요"/>
            <Button  btnContent="로그인" onClick={onClickLogin}/>
            <Button  btnContent="회원가입" onClick={onClickSignUp}/>
        </>
    )
}
export default UserForm;