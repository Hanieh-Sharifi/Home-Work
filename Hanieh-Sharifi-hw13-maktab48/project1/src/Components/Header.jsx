import React, {useState, useContext} from 'react';
import {FcSearch} from 'react-icons/fc';
import {FaRegMoon} from "react-icons/fa";
import {BiSun} from "react-icons/bi";
import {MdLanguage} from "react-icons/md";
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io";
import {VscThreeBars} from "react-icons/vsc";
import MainData from '../Contexts/MainData';
import BodyDisplay from '../Contexts/BodyDisplay';
import ThemeContext from '../Contexts/ThemeContext';
import Dropdown from 'react-dropdown';
import LanguageContext from '../Contexts/LanguageContext';

import { useMediaPredicate } from "react-media-hook";

const dropDownOptions = ["English","Germany","Spanish","French","Japanese","Italian","Breton","Portuguese","Dutch","Croatian","Persian"];
const dropDownOptionsCode = ["en","de","es","fr","ja","it","br","pt","nl","hr","fa"];


const MaxComponent = (inputComponent) => {
    const smallerThan850 = useMediaPredicate("(max-width: 850px)");
    
    return smallerThan850 && inputComponent;
};
const MinComponent = (inputComponent) => {
    const biggerThan850 = useMediaPredicate("(min-width: 851px)");

    return biggerThan850 && inputComponent;
}
const InputComponent = (inputComponent) => {
    const smallerThan600 = useMediaPredicate("(min-width: 650px)");

    return smallerThan600 && inputComponent;
}

function Header() {

    const {setInputValue} = useContext(MainData);
    const {setToggleBodyDisplay} = useContext(BodyDisplay);
    const [internalInputValue, setInternalInputValue] = useState("");
    const {theme,setTheme} = useContext(ThemeContext);
    const {setLanguage} = useContext(LanguageContext);
    const [toggleHeader, setToggleHeader] = useState(false)

    function setLanguageValue(e)
    {
        let index = dropDownOptions.indexOf(e.value)
        setLanguage(dropDownOptionsCode[index]);
    }


    return (
        <header className={`header-main-parent ${theme==="light"?"":"header-main-parent-dark"}`}>
                <div className="menu-bar" onClick={()=>setToggleHeader(!toggleHeader)}>
                    {MaxComponent(<VscThreeBars/>)}
                </div>
                <h1 className="header-main-text">Weather</h1>
            <div  className="header-ul-parent">
                {MinComponent(<ul className="header-ul">
                    <li onClick={()=>setToggleBodyDisplay(false)}><a className={`${theme==="light"?"":"header-link-dark"}`}>Home</a></li>
                    <li><a className={`${theme==="light"?"":"header-link-dark"}`} href="#footer">Best Weathers</a></li>
                </ul>)}
            </div>
            {InputComponent(<form  onSubmit={(e) => {e.preventDefault();setInputValue(internalInputValue)}} className="header-input-parent">
                <input value={internalInputValue} onChange={(e) => {e.target.value==="" && setInputValue("");setInternalInputValue(e.target.value)}} type="text" size={35}/>
                <div className="search-icon-parent">
                    <button type="submit">
                        <FcSearch/>
                    </button>
                </div>
            </form>)}
            <div className="header-context-toggler">
                <div>
                    <Dropdown onChange={(e) => setLanguageValue(e)} arrowClassName='dropDown-arrow' placeholderClassName='dropDown-placeHolder' controlClassName='dropDown-menu-control' arrowClosed={<IoIosArrowDown/>}  arrowOpen={<IoIosArrowUp/>} menuClassName={`dropDown-menu ${theme==="light"?"":"dropDown-menu-dark"}`} className='main-dropDown-parent' options={dropDownOptions} placeholder={<MdLanguage/>} />
                </div>
                <div onClick={() => theme==="light" ? setTheme("dark") : setTheme("light")}>
                    {theme==="light" ?<FaRegMoon/> : <BiSun/>}
                </div>
            </div>
        </header>
    )
}

export default Header
