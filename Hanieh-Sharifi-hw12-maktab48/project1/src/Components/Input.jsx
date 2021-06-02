import React from 'react'

function Input({id,placeholder,size,type,onChange,readOnly,value,onClick}) {
    return (
            <input id={id} onClick={onClick} value={value} readOnly={readOnly} onChange={onChange} type={type} size={size} placeholder={placeholder}/>
    )
}

export default Input
