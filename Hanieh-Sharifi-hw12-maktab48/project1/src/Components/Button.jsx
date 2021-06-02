import React from 'react'

function Button(props) {
    return (
        <div onClick={props.onClick} className={`button-parent ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Button
