import React from 'react'

function Input({valv,onChanger}) {
    return (
        <input onChange={(e) => onChanger(e)} value={valv} placeholder={"Type to filter ..."}/>
    )
}

export default Input;
