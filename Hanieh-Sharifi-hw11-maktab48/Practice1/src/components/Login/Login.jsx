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
    let text = ["شما وارد شدید","رمز مجددا برای شما ارسال شد"]
    function email(e)
    {
        setEmailValue(e.target.value);
    }
    function enterText(e)
    {
        e.preventDefault();
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
            {result && forgotten && (<Input type={"email"} textHolder={"پست الکترونیک *"} size={38} language={"en"}/>)}
            {result && forgotten && (<PasswordInput textHolder={"رمز عبور *"} size={38} language={"en"}/>)}
            {result && forgotten && (<a className="password-link" onClick={() => setForgotten(!forgotten)}>فراموش کردید؟</a>)}
            {result && !forgotten && (<Input change={email} value={emailValue} textHolder={"پست الکترونیک *"} size={40} type={"email"} language={"en"}/>)}
            {result && (<input onClick={(e)=> enterText(e)} type="submit" className="submit-login-btn" value={forgotten ? "ورود" : "ثبت"}/>)}
            {!result && (<Enter resultText={text[i]} />)}
        </form>
    );
};

export default Login;
