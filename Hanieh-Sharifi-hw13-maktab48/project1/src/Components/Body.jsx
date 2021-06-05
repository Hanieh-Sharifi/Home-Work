import React, {useContext, useState} from 'react';
import Items from "./Items";
import Detail from "./Detail";
import SelectedItemContext from '../Contexts/SelectedItemContext';
import BodyDisplay from '../Contexts/BodyDisplay';

function Body() {

    const [selectedItem, setSelectedItem] = useState({});
    const {toggleBodyDisplay} = useContext(BodyDisplay);


    return (
        <div>
            <SelectedItemContext.Provider value={{selectedItem,setSelectedItem}}>
                {toggleBodyDisplay? <Detail/> : <Items/>}
            </SelectedItemContext.Provider>
        </div>
    )
}

export default Body
