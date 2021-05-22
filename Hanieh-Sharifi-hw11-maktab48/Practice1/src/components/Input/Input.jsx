import React, { useState } from 'react';
import "./input.css";


const Input = ({textHolder, size, language, type, change,value}) => {
    return (
            <input onChange={change} value={value}  type={type} placeholder={textHolder} size={size} className={`${(language === "en") ? "en" : "fa"}`}/>
    );
}
 
export default Input;