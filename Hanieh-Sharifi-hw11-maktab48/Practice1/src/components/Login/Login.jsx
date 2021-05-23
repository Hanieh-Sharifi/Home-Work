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
    const [emailValidation, setEmailValidation] = useState(false);
    // const mailvalidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

    function validateEmail(e)
    {
        // it checks the email
        const mailvalidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return setEmailValidation(mailvalidation.test(String(e.target.value).toLowerCase()));
    }
    

    return (
        <form>
            {result && (<h2 className="login-header">{forgotten ? "خوش آمدید" : "ایمیل خود را وارد کنید"}</h2>)}
            {result && (<div>
                <Input change={(e) => {validateEmail(e);setEmailValue(e.target.value)}} type={"email"} textHolder={"پست الکترونیک *"} size={38} language={"en"}/>
                {!emailValue && (<div className="error">لطفا فیلد پر شود</div>)}
                {!emailValidation && emailValue && (<div className="error">ایمیل اشتباه است</div>)}
            </div>)}
            {result && forgotten && (<div>
                <PasswordInput changed={(e) => setPassValue(e.target.value)} value={passValue} textHolder={"رمز عبور *"} size={38} language={"en"}/>
                {!passValue && (<div className="error">لطفا فیلد پر شود</div>)}
            </div>)}
            {result && forgotten && (<a  className="password-link" onClick={() => {setForgotten(!forgotten);}}>رمز را فراموش کردید؟</a>)}
            {result && (<input onClick={(e)=> {e.preventDefault();emailValidation && (passValue !== "" || !forgotten) && emailValue !== "" && enterText(e);}} type="submit" className="submit-login-btn" value={forgotten ? "ورود" : "ثبت"}/>)}
            {!result && (<Enter resultText={emailValidation ? text[i] : "ایمیل شما اشتباه بود"} />)}
            {!result && !forgotten && (<input onClick={(e)=> {e.preventDefault();setForgotten(true);setResult(true)}} type="submit" className="submit-login-btn" value={"بازگشت"}/>)}
        </form>
    );
};

export default Login;
