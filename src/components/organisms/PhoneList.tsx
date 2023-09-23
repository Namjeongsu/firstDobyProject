import React, {ChangeEvent, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import classNames from "classnames";
import '../../styles/PhoneList.scss'
import '../../styles/CreatePhoneForm.scss'
import UserList from "../atoms/UserList";
import {CREATE_OR_UPDATE_PERSON, GET_PEOPLE} from "../../api/apollo/gql/showPhoneBook.gql";
import UserInput from "../atoms/UserInput";
import Button from "../atoms/Button";

const PhoneList=()=>
{
    const accessToken=`Bearer ${window.localStorage.getItem("accessToken")}`;
    const searchRequest={name:'',phone:''}
    console.log("재윤이 하이");
    const [name,setName]=useState(   '');
    const [phone,setPhone]=useState('');
    const {loading, data, refetch}=useQuery(GET_PEOPLE,{context:{
            headers:{
                authorization:accessToken
            }
            , variables:{
                searchRequest
            }
        }});
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
        }catch(error)
        {
           window.alert(error)
        }
        window.location.reload();
    }


    return(
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                    <div className={classNames('PhoneList')}>
                        <p>전화번호부</p>
                        <UserList data={data} />
                    </div>
                        <div className={classNames('CreatePhoneForm')}>
                        <UserInput ph="이름 입력" onChange={onNameChange} />
                        <UserInput ph="전화번호 입력"  onChange={onPhoneChange}/>
                        <Button btnContent="추가" onClick={onClick}/>
                        </div>
                    </>
                )}
            </div>
    )
}
export default PhoneList;