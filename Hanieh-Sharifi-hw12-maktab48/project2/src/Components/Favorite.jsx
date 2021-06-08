import React from 'react'
import Card from './Card';

function Favorite({editSelected,items}) {

    return (
        <div className="favorite">
            <div className="favorite-place-holder">Your Favorites</div>
            <div className="favorite-card-parent">
                {items.sort(function(a,b) {return a.name.localeCompare(b.name)}).map((value,index) => {
                    return <Card deleteItem={editSelected} btnDisplay={true} color={value.sex} key={value.id} name={value.name}/>
                })}
            </div>
        </div>
    )
}

export default Favorite;
