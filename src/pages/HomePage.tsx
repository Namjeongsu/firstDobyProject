import React from 'react';
import classNames from "classnames";
import PhoneList from "../components/organisms/PhoneList";
import '../styles/PhoneList.scss'


const HomePage=()=>{
    return(
        <div className={classNames('PhoneBook')}>
             <PhoneList/>
        </div>
);
}
export default HomePage;