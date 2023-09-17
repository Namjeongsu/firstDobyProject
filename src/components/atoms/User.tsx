import React from 'react';
import Button from "./Button";

export interface UserProps
{
    id:number;
    name:string;
    phone:string;
    onRemove:(id:number)=>void;
}
const User=({id,name,phone,onRemove}:UserProps)=>
{
    return(
        <div>
            <b>{name}의 연락처</b> <span>({phone}) </span>
            <Button btnContent="삭제" onClick={()=>onRemove(id)}/>
        </div>
    );
}
export default User;