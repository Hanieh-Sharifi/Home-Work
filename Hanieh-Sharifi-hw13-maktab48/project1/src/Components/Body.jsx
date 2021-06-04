import React, {useState} from 'react';
import Items from "./Items";
import Detail from "./Detail";
import SelectedItemContext from '../Contexts/SelectedItemContext';

function Body() {

    const [selectedItem, setSelectedItem] = useState({});
    const [toggleBodyDisplay, setToggleBodyDisplay] = useState(false)

    return (
        <div>
            <SelectedItemContext.Provider value={{selectedItem,setSelectedItem,setToggleBodyDisplay}}>
                {toggleBodyDisplay? <Detail/> : <Items/>}
            </SelectedItemContext.Provider>
        </div>
    )
}

export default Body
