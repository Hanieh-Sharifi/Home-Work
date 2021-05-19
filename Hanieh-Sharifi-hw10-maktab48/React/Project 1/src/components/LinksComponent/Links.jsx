import React,{useState} from 'react';
import './style/css/links.css';
import bread from './imgs/bread.png';
import hotel from './imgs/hotel.png';
import restaurant from './imgs/restaurant.png';
import kharobar from './imgs/kharobar.png';
import Items from './Items';

const Links = () => {
    const [toggle1, settoggle1] = useState(true);
    const [toggle2, settoggle2] = useState(false);
    const [toggle3, settoggle3] = useState(true);
    const [toggle4, settoggle4] = useState(true);
    function toggleFunction1()
    {
        settoggle1(!toggle1)
        settoggle2(true)
        settoggle3(true)
        settoggle4(true)
    }
    function toggleFunction2()
    {
        settoggle2(!toggle2)
        settoggle1(true)
        settoggle3(true)
        settoggle4(true)
    }
    function toggleFunction3()
    {
        settoggle3(!toggle3)
        settoggle2(true)
        settoggle1(true)
        settoggle4(true)
    }
    function toggleFunction4()
    {
        settoggle4(!toggle4)
        settoggle2(true)
        settoggle3(true)
        settoggle1(true)
    }

    return (
        <div className='link-parent'>
            <h1 className='link-header'>بهترین همراهان ما</h1>
            <div className="link-items-parent">
                <Items clickAction={toggleFunction1} source={bread} headerText={"نانوایی و قنادی"} borderClass={toggle1 ? 'opacity': null} />
                <Items clickAction={toggleFunction2} source={restaurant} headerText={"نانوایی و قنادی"} borderClass={toggle2 ? 'opacity': null} />
                <Items clickAction={toggleFunction3} source={hotel} headerText={"نانوایی و قنادی"} borderClass={toggle3 ? 'opacity': null} />
                <Items clickAction={toggleFunction4} source={kharobar} headerText={"نانوایی و قنادی"} borderClass={toggle4 ? 'opacity': null} />
            </div>
        </div>
    );
};

export default Links;