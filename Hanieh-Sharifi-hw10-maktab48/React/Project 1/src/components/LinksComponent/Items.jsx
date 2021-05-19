import React from 'react'

const Items = ({parentClass, clickAction, imageClass, source, headerText, borderClass}) => {
    return (
        <a className="link-item" onClick={clickAction} target={'blank'}>
            <img className="links-image" src={source} alt="" />
            <h5 className="link-text">{headerText}</h5>
            <div className={`border ${borderClass}`}></div>
        </a>
    )
}

export default Items;
