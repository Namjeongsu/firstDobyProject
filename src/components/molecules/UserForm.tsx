import React, {ChangeEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import UserInput from "../atoms/UserInput";
import Button from "../atoms/Button";

const UserForm=()=>
{
    const [id,setId]=useState('');
    const [pw,setPw]=useState('');
    const navigate=useNavigate();

    const onIdChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setId(e.target.value)
    }
    const onPwChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPw(e.target.value);
    }
    const onClickLogin=()=>
    {
        axios.post('https://moviethree.synology.me/back/api-docs/user/login',{
            id,
            pwd:pw
        }).then(response=>{
            if(response.status===200)
            {
                navigate("/home");
            }
            else
            if(response.status===400)
                    console.log("BadRequest");
            else if(response.status===403)
                console.log("로그인에 실패했습니다.");
            else if(response.status===404)
                console.log('가입된 회원이 없습니다.');

        }).catch(error=>{
            console.log(error);
            console.log("서버연결이 안됩니다.");
        });
    }
    const onClickSignUp=()=>
    {
        navigate("/signup");
    }

    return(
        <>
        <UserInput onChange={onIdChange} ph="아이디를 입력하세요"/>
        <UserInput onChange={onPwChange} ph="비밀번호를 입력하세요"/>
            <Button  btnContent="로그인" onClick={onClickLogin}/>
            <Button  btnContent="회원가입" onClick={onClickSignUp}/>
        </>
    )
}
export default UserForm;