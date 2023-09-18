import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
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
                console.log('성공');
                navigate("/");
            }
            else if (response.status === 400) {
                    console.log("badRequest")
                } else if (response.status === 403) {
                    console.log("이미 중복되는 값이 존재합니다.")
                }
        }).catch(error=>{
            console.log(error);
            console.log('서버연결이 안되었습니다.');
            console.log(error.message);
        })
    }
    const onClickEmail=()=>{
        axios.post('https://moviethree.synology.me/back/auth/mail',{
            email
        }).then(response=>{
            if(response.status===200)
            {
                console.log('메일보내기 성공')
            }
        }).catch(error=>
        {
            console.log('실패');
            console.log(error);
            console.log(error.message);
        })
    }
    const onClickEmailCode=()=>{
        axios.post('https://moviethree.synology.me/back/auth/code',{
            authCode:emailCode,
            email
        }).then(response=>{
            if(response.status===200)
            {
                console.log('인증코드 확인완료')
            }
        }).catch(error=>{
            console.log('인증코드 뭔가 실패')
            console.log(error);
            console.log(error.message);
        })
    }
    return (
        <>
            <UserInput ph="아이디 입력" onChange={onIdChange}/>
            <UserInput ph="비밀번호 입력" onChange={onPwChange}/>
            <UserInput ph="비밀번호 확인" onChange={onPwConfirmChange}/>
            <UserInput ph="이름 입력" onChange={onNameChange}/>
            <UserInput ph="이메일 입력" onChange={onEmailChange}/>
            <Button btnContent='인증번호 발송' onClick={onClickEmail}/>
            <UserInput ph='인증번호 입력' onChange={onEmailCodeChange}/>
            <Button btnContent="인증번호 확인" onClick={onClickEmailCode}/>
            <Button btnContent="회원가입하기" onClick={onClickSignUp}/>
        </>
    )
}
export default SignUpPage;