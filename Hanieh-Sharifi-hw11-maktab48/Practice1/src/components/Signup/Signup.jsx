import React, { useState } from 'react'
import Input from '../Input/Input';
import PasswordInput from '../Input/PasswordInput';
import Selection from './Selection';
import "./signup.css";
import Success from './Success';

let education = ["کارشناسی","کارشناسی ارشد","دکترا"];
let country = ["تهران","بوشهر","اصفهان","البرز","فارس","مرکزی","همدان","خوزستان","اردبیل","یزد"];
let city = [["تهران","اسلامشهر"],["بوشهر","جم"],["اصفهان","اردستان"],["کرج","طالقان"],["شیراز","مرودشت"],["اراک","ساوه"],["ملایر","نهاوند"],["دزفول","اهواز"],["مشگین شهر","خلخال"],["یزد","اردکان"]];

function Signup() {

    const [display, setDisplay] = useState(false);
    const [birth, setBirth] = useState(false);
    const [index, setIndex] = useState(-1);
    const [result, setResult] = useState(false);
    const [information, setInformation] = useState("")

    console.log(information);
    return (
        <form className="signup-parent">
            {!result && (<h3 className="signup-header">رایگان ثبت نام کنید</h3>)}
            {!result && (<div className="input-parent">
                <Input textHolder={"نام *"} language={"fa"} size={15} type={"text"}/>
                <Input type={"text"} textHolder={"نام خانوادگی *"} language={"fa"} size={15}/>
            </div>)}
            {!result && (<Input language={"en"} size={38} type={"email"} textHolder={"پست الکترونیک *"}/>)}
            {!result && (<PasswordInput language={"en"} size={38} textHolder={"کلمه عبور *"}/>)}
            {!result && (<div className="education-input-parent">
                {display && (<Input  language={"fa"} size={15} type={"text"} textHolder={"محل تحصیلات *"}/>)}
                <Selection selectionText={"انتخاب تحصیلات"} clickAction={(e)=>{console.log(e.target.value);e.target.value === "false" ? setDisplay(false) : setDisplay(true);}} size={display ? 152 : 313} formFor={education} />
            </div>)}
            {!result && (<div className="birth-input-parent">
                {birth && (<Selection size={birth && 152} formFor={city[parseInt(index)]} clickAction={() => setBirth(true)} selectionText={"انتخاب محل تولد"}/>)}
                <Selection size={birth ? 152 : 313} selectionText={"انتخاب استان"} clickAction={(e)=>{setIndex(e.target.value);e.target.value === "false" ? setBirth(false) : setBirth(true);}} formFor={country} />
            </div>)}
            {!result && (<input onClick={(e) => {e.preventDefault();setResult(true)}} type="submit" className="submit-signup-btn" value="ثبت نام"/>)}
            {result && (<Success fname={information}/>)}
        </form>

    );
}

export default Signup;
