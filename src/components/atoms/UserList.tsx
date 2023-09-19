import React, {useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_PERSON, GET_PEOPLE} from "../../api/apollo/gql/showPhoneBook.gql";
import User, {UserProps} from "./User";

const UserList = () => {
    const accessToken=`Bearer ${window.localStorage.getItem("accessToken")}`;
    const searchRequest={name:'',phone:''}
    const [users, setUsers] = useState<UserProps[]>([]);
   const {loading, data, refetch}=useQuery(GET_PEOPLE,{context:{
       headers:{
           authorization:accessToken
       }
       , variables:{
                searchRequest
           }
       }});
   const [deletePerson]=useMutation(DELETE_PERSON);



   useEffect(()=>{
       console.log('data 보여주기')
       console.log(data);
      if(data)
      {
          setUsers(data.getPeople);
      }

   },[data])

    const onRemove = async (phone: string) => {
        // // 삭제하는 기능 넣기.
        await deletePerson({variables:{DeleteRequest:{phone}}});
    };

    return (
        <div>
            {
                users && users.map((user:{  name: string, phone: string },index) => (
                <User  id={index} name={user.name} phone={user.phone} onRemove={onRemove} />
            ))}
        </div>
    )
}

export default UserList;
