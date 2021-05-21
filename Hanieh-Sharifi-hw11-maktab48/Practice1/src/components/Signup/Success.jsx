import React from 'react'

function Success({fname,lname,email,education,eduPlace,country,city}) {
    return (
        <div style={{color: "white", fontSize: "1.4rem", textAlign: "center"}}>
            {`کاربر گرامی ${fname} ${lname}`}
            <br/>
            <br/>
            {`${email} :با ایمیل`}
            <br/>
            <br/>
            {`تحصیلات ${education} در ${eduPlace}`}
            <br/>
            <br/>
            {`متولد استان ${country} و شهر ${city}`}
        </div>
    )
}

export default Success;
