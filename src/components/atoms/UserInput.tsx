import React, {ChangeEvent} from 'react';

interface UserInfoProps{
    ph:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
}

// 비밀번호인지 아이디인지 kind props로 받고 placeholder로 ph props를 받는다.
const UserInput=({ph,onChange}:UserInfoProps)=>
{

    return(
      <input onChange={onChange}  placeholder={ph}/>
    );
}
export default UserInput;
