import React, {useContext} from 'react';
import SelectedItemContext from '../Contexts/SelectedItemContext';



function Card({data}) {

    const {setSelectedItem} = useContext(SelectedItemContext);
    const {setToggleBodyDisplay} = useContext(SelectedItemContext);

    return (
        <div onClick={() => {setSelectedItem(data);setToggleBodyDisplay(true)}} className="card">
            <img src={data.flag} alt={"Avatar"}/>
            <div className="container">
                <p><b>Country :</b> &nbsp;{data.name}</p>
                <p><b>Capital :</b> &nbsp;{data.capital}</p>
            </div>
        </div>
    )
}

export default Card
