import React from 'react'
import { FaSortAmountDown } from 'react-icons/fa';

function Selection({clickAction,size,formFor,selectionText,selectValue}) {
    return (
        <div>
            <select onChange={selectValue} onClick={(e) => clickAction(e)} style={{width:`${size}px`}}>
                <option value={"false"}>{selectionText}</option>
                {formFor.map((value,index) => {
                    return <option value={index} key={index}>{value}</option>
                })}
            </select>
        </div>
    )
}

export default Selection;
