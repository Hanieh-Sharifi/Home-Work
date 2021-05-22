import React from 'react'

function Success({fname,lname,email,education,educationPlace,country,city}) {
    return (
        <div className="success">
            {` ' کاربر گرامی ' ${fname} ${lname}`}
            <br/>
            {`${email} با ایمیل`}
            <br/>
            {education && educationPlace && `با تحصیلات ${education}`}
            <br/>
            {education && educationPlace && (`در ${educationPlace}`)}
            <br/>
            {city && country && (`متولد استان ${country} و شهر ${city}`)}
            <br/>
            <h3>ثبت نام شدید</h3>
        </div>
    )
}

export default Success;
