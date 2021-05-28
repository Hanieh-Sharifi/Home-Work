import React from 'react'

function Card({deleteItem,btnDisplay,id,clickAction,name,color}) {
    return (
        <li id={id} className={`${color}`} onClick={clickAction}>
            {btnDisplay && <button id={`delete-${name}`} onClick={deleteItem} className="li-btn">×</button>}
            {name}</li>
    )
}

export default Card;
