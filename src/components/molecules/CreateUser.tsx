import React, {ChangeEvent, useState} from 'react';
import { useMutation} from "@apollo/client";
import UserInput from "../atoms/UserInput";
import Button from "../atoms/Button";
import {CREATE_OR_UPDATE_PERSON} from "../../api/apollo/gql/showPhoneBook.gql";



const CreateUser=()=>
{
    const accessToken=`Bearer ${window.localStorage.getItem("accessToken")}`;
    console.log(accessToken);
    const [name,setName]=useState(   '');
    const [phone,setPhone]=useState('');
    const [createOrUpdatePerson] = useMutation(CREATE_OR_UPDATE_PERSON,{context:{
        headers:{
            authorization:accessToken
        }
        }});

    const onNameChange=(e:ChangeEvent<HTMLInputElement>)=>
    {
        setName(e.target.value);
    }
    const onPhoneChange=(e:ChangeEvent<HTMLInputElement>)=>
    {
        setPhone(e.target.value);
    }
    const request={
        name,
        phone
    }
    const onClick=async ()=>
    {
        try{
            const result=await createOrUpdatePerson({
                variables:{
                    request
                },
            });
            console.log(result.data);
        }catch(error)
        {
            console.log(error)
            console.log('에러있음');
        }
    }
    return(
        <div>
            <UserInput ph="이름 입력" onChange={onNameChange}/>
            <UserInput ph="전화번호 입력"  onChange={onPhoneChange}/>
            <Button btnContent="추가" onClick={onClick}/>
        </div>
    )
}
export default CreateUser;