import React from 'react'

function Success({fname,lname,email,education,educationPlace,country,city}) {
    return (
        <div className="success">
            {` ' کاربر گرامی ' ${fname} ${lname}`}
            <br/>
            {`${email} با ایمیل`}
            <br/>
            {education && educationPlace && `با تحصیلات ${education}`}
            {education && educationPlace && (`در ${educationPlace}`)}
            <br/>
            {city && country && (`متولد استان ${country} و شهر ${city}`)}
            <br/>
            <br/>
            <h3>ثبت نام شدید</h3>
        </div>
    )
}

export default Success;
