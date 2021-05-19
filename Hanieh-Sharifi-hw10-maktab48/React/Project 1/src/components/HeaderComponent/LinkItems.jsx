import React from 'react';

const LinkItems = ({classes, clickAction,text}) => {
    return (
        <div className={classes} onClick={clickAction}>
            <li><a>{text}</a></li>
        </div>
    )
}

export default LinkItems;
