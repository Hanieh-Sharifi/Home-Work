import React, {useState, useContext} from 'react';
import {FcSearch} from 'react-icons/fc';
import {FaRegMoon} from "react-icons/fa";
import {BiSun} from "react-icons/bi";
import {MdLanguage} from "react-icons/md";
import MainData from '../Contexts/MainData';
import BodyDisplay from '../Contexts/BodyDisplay';
import ThemeContext from '../Contexts/ThemeContext';

function Header() {

    const {setInputValue} = useContext(MainData);
    const {setToggleBodyDisplay} = useContext(BodyDisplay);
    const [internalInputValue, setInternalInputValue] = useState("");
    const {theme,setTheme} = useContext(ThemeContext);

    return (
        <header className={`header-main-parent ${theme==="light"?"":"header-main-parent-dark"}`}>
            <h1 className="header-main-text">Weather</h1>
            <div  className="header-ul-parent">
                <ul className="header-ul">
                    <li onClick={()=>setToggleBodyDisplay(false)}><a className={`${theme==="light"?"":"header-link-dark"}`}>Home</a></li>
                    <li><a className={`${theme==="light"?"":"header-link-dark"}`} href="#footer">Best Weathers</a></li>
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
                <div onClick={() => theme==="light" ? setTheme("dark") : setTheme("light")}>
                    {theme==="light" ?<FaRegMoon/> : <BiSun/>}
                </div>
                <div>
                    <MdLanguage/>
                </div>
            </div>
        </header>
    )
}

export default Header
