import React from 'react';
import "./style/css/button.css";

const Buttons = ({onClick, size, value, label}) => {
    return (
        <div className="Button" onClick={onClick} data-size={size} data-value={value}>
            {label}
        </div>
    );
};

export default Buttons;
