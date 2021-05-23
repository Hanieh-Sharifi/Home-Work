import React, { useState } from 'react'
import PasswordInput from '../Input/PasswordInput';
import Selection from './Selection';
import "./signup.css";
import Success from './Success';

let educationLevel = ["کارشناسی","کارشناسی ارشد","دکترا"];
let countryLevel = ["تهران","بوشهر","اصفهان","البرز","فارس","مرکزی","همدان","خوزستان","اردبیل","یزد"];
let cityLevel = [["تهران","اسلامشهر"],["بوشهر","جم"],["اصفهان","اردستان"],["کرج","طالقان"],["شیراز","مرودشت"],["اراک","ساوه"],["ملایر","نهاوند"],["دزفول","اهواز"],["مشگین شهر","خلخال"],["یزد","اردکان"]];

function Signup() {

    const [display, setDisplay] = useState(false);
    const [birth, setBirth] = useState(false);
    const [index, setIndex] = useState(-1);
    const [result, setResult] = useState(false);
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [email, setEmail] = useState("");
    const [educationPlace, setEducationPlace] = useState("");
    const [education, setEducation] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [cityIndex, setCityIndex] = useState(-1);
    const [passValue, setPassValue] = useState("");
    const [emailValidation, setEmailValidation] = useState(false)
    
    function validateEmail(e)
    {
        // it checks the email
        const mailvalidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return setEmailValidation(mailvalidation.test(String(e.target.value).toLowerCase()));
    }
    
    return (
        <form className="signup-parent">
            {!result && (<h3 className="signup-header">رایگان ثبت نام کنید</h3>)}
            {!result && (<div className="input-parent">
                <div>
                    <input onChange={(e) => setFamily(e.target.value)} type={"text"} placeholder={"نام خانوادگی *"} className={"fa"} size={15}/>
                    {!family && (<div className="error">لطفا فیلد پر شود</div>)}
                </div>
                <div>
                    <input onChange={(e) => setName(e.target.value)} placeholder={"نام *"} className={"fa"} size={15} type={"text"}/>
                    {!name && (<div className="error">لطفا فیلد پر شود</div>)}
                </div>
            </div>)}
            {!result && (<div>
                <input onChange={(e) => {validateEmail(e);setEmail(e.target.value)}} className={"en"} size={38} type={"email"} placeholder={"پست الکترونیک *"}/>
                {!email && (<div className="error">لطفا فیلد پر شود</div>)}
                {!emailValidation && email && (<div className="error">ایمیل اشتباه است</div>)}
            </div>)}
            {!result && (<div>
                <PasswordInput changed={(e) => setPassValue(e.target.value)} value={passValue} language={"en"} size={38} textHolder={"کلمه عبور *"}/>
                {!passValue && (<div className="error">لطفا فیلد پر شود</div>)}
            </div>)}
            {!result && (<div className="education-input-parent">
                <div>
                    {display && (<input onChange={(e) => setEducationPlace(e.target.value) } className={"fa"} size={15} type={"text"} placeholder={"محل تحصیلات *"}/>)}
                    {display && !educationPlace && (<div className="error">لطفا فیلد پر شود</div>)}
                </div>
                <Selection selectValue={(e) => {setEducation(educationLevel[parseInt(e.target.value)])}} selectionText={"انتخاب تحصیلات"} clickAction={(e)=>{e.target.value === "false" ? setDisplay(false) : setDisplay(true);}} size={display ? 152 : 313} formFor={educationLevel} />
            </div>)}
            {!result && (<div className="birth-input-parent">
                <div>
                    {birth && (<Selection selectValue={(e) => {setCity(cityLevel[cityIndex][parseInt(e.target.value)])}} size={birth && 152} formFor={cityLevel[parseInt(index)]} clickAction={() => setBirth(true)} selectionText={"انتخاب محل تولد"}/>)}
                    {birth && !city && (<div className="error">لطفا فیلد پر شود</div>)}
                </div>
                <div>
                    <Selection selectValue={(e) => {setCountry(countryLevel[parseInt(e.target.value)]);setCityIndex(e.target.value)}} size={birth ? 152 : 313} selectionText={"انتخاب استان"} clickAction={(e)=>{setIndex(e.target.value);e.target.value === "false" ? setBirth(false) : setBirth(true);}} formFor={countryLevel} />
                    {!country && (<div className="error">لطفا فیلد پر شود</div>)}
                </div>
            </div>)}
            {!result && (<input onClick={(e) => {e.preventDefault();(emailValidation && ((education && educationPlace) || (!education && !educationPlace)) && country && city && passValue && name && family && email && setResult(true))}} type="submit" className="submit-signup-btn" value="ثبت نام"/>)}
            {result && (<Success fname={name} lname={family} email={email} educationPlace={educationPlace} education={education} city={city} country={country} />)}
        </form>

    );
}

export default Signup;
