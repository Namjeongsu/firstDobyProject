import React, {ChangeEvent, useState} from 'react';
import {gql, useMutation} from "@apollo/client";
import UserInput from "../atoms/UserInput";
import Button from "../atoms/Button";


const CREATE_OR_UPDATE_PERSON = gql`
  mutation CreateOrUpdatePerson($auth: String, $request: PhoneRequest) {
    createOrUpdatePerson(auth: $auth, request: $request) {
      name
      phoneNumber
    }
  }
`;
const CreateUser=()=>
{
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [createOrUpdatePerson] = useMutation(CREATE_OR_UPDATE_PERSON);

    const onNameChange=(e:ChangeEvent<HTMLInputElement>)=>
    {
        setName(e.target.value);
    }
    const onPhoneChange=(e:ChangeEvent<HTMLInputElement>)=>
    {
        setPhone(e.target.value);
    }
    const onClick=async ()=>
    {
        try{
            const result=await createOrUpdatePerson({
                variables:{
                    auth:'응애',
                    request:{
                        name,
                        phoneNumber:phone
                    },
                },
            });
            console.log(result.data);
        }catch(error)
        {
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