import React, { useContext} from 'react';
import MainData from '../Contexts/MainData';
import Card from "./Card";

function Items() {

    const {data} = useContext(MainData);
    const {inputValue} = useContext(MainData);

    return (
        <div id="items" className="items-main-parent">
            {data.filter((value) => value.name.indexOf(inputValue)!==-1).map((data,index) => {
                return(
                    <Card key={index} data={data}/>
                )
            })}
        </div>
    )
}

export default Items;
