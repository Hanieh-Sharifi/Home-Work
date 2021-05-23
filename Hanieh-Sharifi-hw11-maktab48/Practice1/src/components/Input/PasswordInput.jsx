import React,{useState} from 'react';
import "./input.css";
import { FaEye } from 'react-icons/fa';

function PasswordInput({textHolder,value,changed}) {
    const [pass, setPass] = useState(true);
    

    return (
        <div className="password-input-parent">
            <FaEye onClick={() => setPass(!pass)} style={{ color: "white", margin: "auto"}}/>
            <input onChange={changed} value={value} type={(pass) ? "password" : "text"} placeholder={textHolder} size={34} className={"en"}/>
        </div>
    )
}

export default PasswordInput
