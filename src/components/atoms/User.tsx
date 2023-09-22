import React from 'react';
import {useMutation} from "@apollo/client";
import {DELETE_PERSON} from "../../api/apollo/gql/showPhoneBook.gql";
import Button from "./Button";

export interface UserProps
{
    id:number;
    name:string;
    phone:string;
}
const User=({id,name,phone}:UserProps)=>
{
    const accessToken=`Bearer ${window.localStorage.getItem("accessToken")}`;
    // console.log(accessToken);

    const [deletePerson]=useMutation(DELETE_PERSON,{context:{
            headers:{
                authorization:accessToken
            }
        }});
    const onRemove = async (phone:string) => {
        // console.log('삭제');
        const request={
            phone
        }
        // console.log(request.phone)
        // // 삭제하는 기능 넣기.
        try {
            const result=await deletePerson({
                variables:{
                    request
                },
            });
        }catch(error)
        {
            // console.log(error);
            window.alert(error)
        }
        window.location.reload();
    };
    return(
        <div>
            <b>{name}의 연락처</b> <span>({phone}) </span>
            <Button btnContent="삭제" onClick={()=>onRemove(phone)}/>
        </div>
    );
}
export default User;