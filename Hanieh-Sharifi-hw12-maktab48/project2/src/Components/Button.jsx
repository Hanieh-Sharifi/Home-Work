import React from 'react'

function Button({color, clickAction, text}) {
    return (
            <button style={{backgroundColor: `${color}`, color: "white", fontSize: "2rem", padding: "1px 15px", border: "0", cursor: "pointer"}} onClick={clickAction}>{text}</button>
    )
}

export default Button;
