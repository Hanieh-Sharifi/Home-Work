import React from 'react';
import "./style/css/icons.css";


const IconsItem = ({item,imagecontainer,itemtextClass,source, text, imageClass}) => {
    return (
        <div className={item}>
            <div className={imagecontainer}>
                <img src={source} className={imageClass} alt={imageClass}/>
            </div>
            <h4 className={itemtextClass}>{text}</h4>
        </div>
    )
}

export default IconsItem
