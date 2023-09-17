import React from 'react';

interface ButtonProps{
    btnContent:string;
    onClick:()=>void;
}
// 어떤버튼인지,어디로 가는 버튼인지 props로 전달 받는 버튼
const Button=({btnContent,onClick}:ButtonProps)=>{

    return <button type="button" onClick={onClick} >{btnContent}</button>
}
export default Button;