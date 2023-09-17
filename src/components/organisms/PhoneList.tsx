import React from 'react';
import UserList from "../atoms/UserList";
import CreateUser from "../molecules/CreateUser";

const PhoneList=()=>
{
    return(
        <div>
            <UserList/>
            <CreateUser/>
        </div>
    )
}
export default PhoneList;