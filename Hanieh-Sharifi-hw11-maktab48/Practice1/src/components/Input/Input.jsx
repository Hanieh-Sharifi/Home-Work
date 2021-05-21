import React, { useState } from 'react';
import "./input.css";


const Input = ({textHolder, size, language, type, change}) => {
    return (
            <input onChange={change} type={type} placeholder={textHolder} size={size} className={`${(language === "en") ? "en" : "fa"}`}/>
    );
}
 
export default Input;