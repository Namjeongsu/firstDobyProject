import React, {ChangeEvent} from 'react';
import classNames from "classnames";
import "../../styles/UserInput.scss"


interface UserInfoProps{
    ph:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}

// 비밀번호인지 아이디인지 kind props로 받고 placeholder로 ph props를 받는다.
const UserInput=({ph,onChange,type}:UserInfoProps)=>
{

    return(
      <input className={classNames("UserInput")} type={type} onChange={onChange}  placeholder={ph} />
    );
}
export default UserInput;
