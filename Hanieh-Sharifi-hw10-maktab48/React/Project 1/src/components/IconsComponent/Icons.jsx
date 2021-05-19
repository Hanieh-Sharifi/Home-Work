import React from 'react';
import IconsItem from './IconsItem';
import leaf from "./imgs/leaf.png";
import coins from "./imgs/coins.png";
import users from "./imgs/multipleUsers.png";
import "./style/css/icons.css";

const Icons = () => {
    return (
        <div className="icon-parent">
            <IconsItem text={"اسراف کمتر"} item={"item"} imagecontainer={"image-container"} itemtextClass={"item-text"} source={leaf} imageClass={"leaf"}/>
            <IconsItem text={"مشتریان جدید"} item={"item"} imagecontainer={"image-container"} itemtextClass={"item-text"} source={users} imageClass={"users"}/>
            <IconsItem text={"درآمد بیشتر"} item={"item"} imagecontainer={"image-container"} itemtextClass={"item-text"} source={coins} imageClass={"coins"}/>
        </div>
    );
};

export default Icons;
