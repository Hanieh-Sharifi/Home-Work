import React from 'react';
import "./style/css/keypad.css";

const Keypad = (props) => {
    return (
        <div className="Keypad">
            {/* We are using composition instead of inheritance.
                read more: https://reactjs.org/docs/composition-vs-inheritance.html */}
            {props.children}
        </div>
    )
}

export default Keypad;
