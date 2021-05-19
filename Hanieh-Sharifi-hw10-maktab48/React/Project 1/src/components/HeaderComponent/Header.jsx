import React,{useState} from 'react';
import logo from './imgs/logo.jpg';
import './style/css/header.css';
import bars from './imgs/bars.svg';
import LinkItems from './LinkItems';

const Header = () => {
    const [toggle1, settoggle1] = useState(false);
    const [toggle2, settoggle2] = useState(false);
    const [toggle3, settoggle3] = useState(false);
    const [toggle4, settoggle4] = useState(false);
    const [shower, setShower] = useState(false);


    function showerClicked()
    {
        setShower(!shower)
    }
    function toggleFunction1()
    {
        settoggle1(!toggle1)
        settoggle2(false)
        settoggle3(false)
        settoggle4(false)
    }
    function toggleFunction2()
    {
        settoggle2(!toggle2)
        settoggle1(false)
        settoggle3(false)
        settoggle4(false)
    }
    function toggleFunction3()
    {
        settoggle3(!toggle3)
        settoggle2(false)
        settoggle1(false)
        settoggle4(false)
    }
    function toggleFunction4()
    {
        settoggle4(!toggle4)
        settoggle2(false)
        settoggle3(false)
        settoggle1(false)
    }
    return (
        <div className="header-container">
            <div className="width"></div>
            <div className="header-parent">
                <div className="image-parent">
                    <img src={bars} className="bars" alt="" onClick={showerClicked}/>
                    <img src={logo} className="logoSecond"/>
                </div>
                <div className={`${shower ? 'shower' : 'notShowing'}`}>
                    <ul className="responsive-items">
                        <LinkItems classes={`li-container ${toggle1 ? 'header-active': null}`} clickAction={toggleFunction1} text={"درباره ما"}/>
                        <LinkItems classes={`li-container ${toggle2 ? 'header-active': null}`} clickAction={toggleFunction2} text={"کسب و کار"}/>
                        <LinkItems classes={`li-container ${toggle3 ? 'header-active': null}`} clickAction={toggleFunction3} text={"پشتیبانی"}/>
                        <LinkItems classes={`li-container ${toggle4 ? 'header-active': null}`} clickAction={toggleFunction4} text={"سوالات متداول"}/>
                        <button className="list-btn" >فروشگاه من</button>
                    </ul>

                </div>
                <button className="btn" >فروشگاه من</button>
                <ul className="items">
                <LinkItems classes={`li-container ${toggle1 ? 'header-active': null}`} clickAction={toggleFunction1} text={"درباره ما"}/>
                        <LinkItems classes={`li-container ${toggle2 ? 'header-active': null}`} clickAction={toggleFunction2} text={"کسب و کار"}/>
                        <LinkItems classes={`li-container ${toggle3 ? 'header-active': null}`} clickAction={toggleFunction3} text={"پشتیبانی"}/>
                        <LinkItems classes={`li-container ${toggle4 ? 'header-active': null}`} clickAction={toggleFunction4} text={"سوالات متداول"}/>
                </ul>
                <img src={logo} className="logo"/>
            </div>
        </div>
    );
};

export default Header;