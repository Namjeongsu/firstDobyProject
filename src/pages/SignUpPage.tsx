import React, {ChangeEvent, useState} from 'react';
import "../styles/InputForm.scss"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import UserInput from "../components/atoms/UserInput";
import Button from "../components/atoms/Button";


const SignUpPage=()=>{
    const [id,setId]=useState('')
    const [pw,setPw]=useState('')
    const [pwConfirm,setPwConfirm]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [emailCode,setEmailCode]=useState('');

    const onIdChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setId(e.target.value)
    }
    const onPwChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPw(e.target.value);
    }
    const onPwConfirmChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPwConfirm(e.target.value);
    }
    const onNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    }
    const onEmailChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);

    }
    const onEmailCodeChange=(e:ChangeEvent<HTMLInputElement>)=>
    {
        setEmailCode(e.target.value);

    }
    const navigate=useNavigate();

    const onClickSignUp=()=>
    {

        axios.post('https://moviethree.synology.me/back/user/signup',{
            id,
            pwd:pw,
            pwdConfirm:pwConfirm,
            userName:name,
            email,
        }).then(response=>{
            if(response.status===200)
            {
                navigate("/");
            }
        }).catch(error=>{
           window.alert(error.message)
        })
    }
    const onClickEmail=()=>{
        axios.post('https://moviethree.synology.me/back/auth/mail',{
            email
        }).then(response=>{
            if(response.status===200)
            {
                console.log('메일 전송 요청 완료')
            }
        }).catch(error=>
        {
           window.alert(error.message)
        })
    }
    const onClickEmailCode=()=>{
        axios.post('https://moviethree.synology.me/back/auth/code',{
            authCode:emailCode,
            email
        }).then(response=>{
            if(response.status===200)
            {
                window.alert('인증코드 확인완료')
            }
        }).catch(error=>{
            window.alert(error.message)
        })
    }
    return (
        <div className={classNames("SignUpForm")}>
            <UserInput ph="  아이디 입력" onChange={onIdChange}/>
            <UserInput ph="  비밀번호 입력" type="password" onChange={onPwChange}/>
            <UserInput ph="  비밀번호 확인" type="password" onChange={onPwConfirmChange}/>
            <UserInput ph="  이름 입력" onChange={onNameChange}/>
             <div className={classNames("InputForm")}>
            <UserInput ph="  이메일 입력" onChange={onEmailChange}/>
            <Button btnContent='메일 전송' onClick={onClickEmail}/>
             </div>
             <div className={classNames("InputForm")}>
            <UserInput ph='  인증번호 입력' onChange={onEmailCodeChange}/>
            <Button btnContent="코드 확인" onClick={onClickEmailCode}/>
             </div>
            <Button btnContent="회원가입하기" onClick={onClickSignUp}/>
        </div>
    )
}
export default SignUpPage;