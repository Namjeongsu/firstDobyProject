import React, {useEffect, useState} from "react";
import User, {UserProps} from "./User";

interface UserListProps{
    data:any;

}

const UserList = ({data}:UserListProps) => {

    const [users, setUsers] = useState<UserProps[]>([]);


   useEffect(()=>{
       console.log('data 보여주기')
       console.log(data);
      if(data)
      {

          setUsers(data.getPeople.map((user:{name:string,phone:string},index:number)=>{return ({...user, id:index})}));
      }

   },[])


    return (
        <div>
            {
                users && users.map((user:{  id: number, name: string, phone: string }) => (
                <User key={user.id} id={user.id} name={user.name} phone={user.phone}  />
            ))}
        </div>
    )
}

export default UserList;
