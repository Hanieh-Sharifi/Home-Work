import React, {useContext} from 'react';
import SelectedItemContext from '../Contexts/SelectedItemContext';
import BodyDisplay from '../Contexts/BodyDisplay';
import ThemeContext from "../Contexts/ThemeContext";


function Card({data}) {

    const {setSelectedItem} = useContext(SelectedItemContext);
    const {setToggleBodyDisplay} = useContext(BodyDisplay);
    const {theme} = useContext(ThemeContext);

    return (
        <div onClick={() => {setSelectedItem(data);setToggleBodyDisplay(true)}} className={`card ${theme==="light"?"":"card-dark"}`}>
            <img src={data.flag} alt={"Avatar"}/>
            <div className="container">
                <p><b>Country :</b> &nbsp;{data.name}</p>
                <p><b>Capital :</b> &nbsp;{data.capital}</p>
            </div>
        </div>
    )
}

export default Card
