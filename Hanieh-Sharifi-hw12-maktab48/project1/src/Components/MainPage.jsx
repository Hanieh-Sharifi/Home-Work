import React, { useState } from 'react';
import Input from "./Input";
import Card from "./Card";
import Button from "./Button";
import magnifier from "../imgs/magnifier.jpg";
import {BsPlus} from "react-icons/bs";
import {HiOutlineHome} from "react-icons/hi";
import {IoShareOutline} from "react-icons/io5";

function MainPage({clickedComponent,contactsInf,edited,onClick}) {

    const [icon,setIcon] = useState(false);
    const [inputValue, setInputValue] = useState("")
    const [contacts, setContacts] = useState(contactsInf);

    function clickedItem(e)
    {
        clickedComponent(e.target.id-1)
    }

    
    function deletedItem(id)
    {
        let helper = contacts;
        helper = helper.filter((value) => value.id!==id)
        setContacts(helper);
    }

    function editList(value)
    {
        let helper = contacts;
        helper[value.id-1] = value;
        setContacts(helper)
    }
    
    
    return (
        <div className="main-page">
            <div className="search-input">
                <img src={magnifier} alt="nope" hidden={icon}/>
                <Input onChange={(e) => {e.target.value ? setIcon(true) : setIcon(false);setInputValue(e.target.value)}} type="text" size={35} placeholder='Search by name'/>
            </div>
            <div className="cards-parent">
                {contacts.filter((value) => {return value.name.includes(inputValue)}).map((value) => {
                    return <Card src={value.image} editedContact={(value) => editList(value)} deletedItem={(id) => deletedItem(id)} edited={edited} onClick={(e) => clickedItem(e)} id={value.id} key={value.id} name={value.name} email={value.email} address={value.address} number={value.number}/>
                })}
            </div>
            <div className="add-button-parent">
                <Button onClick={onClick}>
                    <BsPlus/>
                </Button>
            </div>
            <div className="home-share-buttons">
                <Button>
                    <HiOutlineHome/>
                </Button>
                <Button>
                    <IoShareOutline/>
                </Button>
            </div>
        </div>
    )
}

export default MainPage
