import React, {useState, useContext} from 'react';
import {FcSearch} from 'react-icons/fc';
import {FaRegMoon} from "react-icons/fa";
import {BiSun} from "react-icons/bi";
import {GrLanguage} from "react-icons/gr";
import MainData from '../Contexts/MainData';

function Header() {

    const {inputValue} = useContext(MainData);
    const {setInputValue} = useContext(MainData);
    const [internalInputValue, setInternalInputValue] = useState("")

    return (
        <header className="header-main-parent">
            <h1 className="header-main-text">Weather</h1>
            <div className="header-ul-parent">
                <ul className="header-ul">
                    <li><a href="#items">Home</a></li>
                    <li><a href="#footer">Best Weathers</a></li>
                </ul>
            </div>
            <form  onSubmit={(e) => {e.preventDefault();setInputValue(internalInputValue)}} className="header-input-parent">
                <input value={internalInputValue} onChange={(e) => {e.target.value==="" && setInputValue("");setInternalInputValue(e.target.value)}} type="text" size={35}/>
                <div className="search-icon-parent">
                    <button type="submit">
                        <FcSearch/>
                    </button>
                </div>
            </form>
            <div className="header-context-toggler">
                <div>
                    <FaRegMoon/>
                </div>
                <div>
                    {/* <BiSun/> */}
                </div>
                <div>
                    <GrLanguage/>
                </div>
            </div>
        </header>
    )
}

export default Header
