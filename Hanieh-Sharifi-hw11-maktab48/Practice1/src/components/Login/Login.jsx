import React, { useState } from 'react';
import "./login.css";
import Input from '../Input/Input';
import PasswordInput from '../Input/PasswordInput';
import Enter from './Enter';

let i=0;

function Login() {
    const [forgotten, setForgotten] = useState(true)
    const [result, setResult] = useState(true)
    const [emailValue, setEmailValue] = useState("");
    const [passValue, setPassValue] = useState("");

    let text = ["شما وارد شدید","رمز مجددا برای شما ارسال شد"]

    function enterText(e)
    {
        setResult(!result);
        if (e.target.value === "ورود")
        {
            i = 0;
        }
        else if (e.target.value === "ثبت")
        {
            i = 1;
            text.push(emailValue)
        }
        
    }

    return (
        <form>
            {result && (<h2 className="login-header">{forgotten ? "خوش آمدید" : "ایمیل خود را وارد کنید"}</h2>)}
            {result && (<Input change={(e) => setEmailValue(e.target.value)} type={"email"} textHolder={"پست الکترونیک *"} size={38} language={"en"}/>)}
            {result && forgotten && (<PasswordInput changed={(e) => setPassValue(e.target.value)} value={passValue} textHolder={"رمز عبور *"} size={38} language={"en"}/>)}
            {result && forgotten && (<a className="password-link" onClick={() => {setForgotten(!forgotten);}}>فراموش کردید؟</a>)}
            {result && (<input onClick={(e)=> {e.preventDefault();(passValue !== "" || !forgotten) && emailValue !== "" && enterText(e);}} type="submit" className="submit-login-btn" value={forgotten ? "ورود" : "ثبت"}/>)}
            {!result && (<Enter resultText={text[i]} />)}
            {!result && !forgotten && (<input onClick={(e)=> {e.preventDefault();setForgotten(true);setResult(true)}} type="submit" className="submit-login-btn" value={"بازگشت"}/>)}
        </form>
    );
};

export default Login;
