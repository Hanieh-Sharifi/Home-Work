import React, { useState} from 'react';
import './App.css';
import Card from './Components/Card';
import Favorite from './Components/Favorite';
import Input from './Components/Input';
import ScrollArrow from './Components/ScrollToTop';
import nameList from './name.json';

function App()
{
    const NAMES = nameList;
    const [inputVal, setInputVal] = useState("");
    const [selected, setSelected] = useState([]);

    function inputValHandler(e)
    {
        setInputVal(e.target.value)
    }
    
    function selectedCards(e)
    {
        let subItem = nameList.filter((value) => {return value.id === parseInt(e.target.id)});
        selected.indexOf(...subItem) === -1 && setSelected([...selected,...subItem])
    }

    function editFavItems(e)
    {
        let deletedItem = selected.filter((value) => {return value.name !== e.target.id.replace("delete-","")});
        setSelected(deletedItem);
    }
    
    return(
        <div className="App">
            <Input onChanger={(e) => inputValHandler(e)} valv={inputVal}/>
            <Favorite editSelected={(e) => editFavItems(e)} items={selected}/>
            <ul>
                {NAMES.sort(function(a,b) {return a.name.localeCompare(b.name)}).filter((value) => value.name.includes(inputVal)).map((value) => {
                    return <Card id={value.id} clickAction={(e) => selectedCards(e)} color={value.sex} key={value.id} name={value.name}/>
                })}
            </ul>
            {inputVal && (<button className="btn" onClick={()=>setInputVal("")}>Clear Search</button>)}
            <ScrollArrow/>
        </div>
    );
}

export default App;