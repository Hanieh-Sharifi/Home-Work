import React, { Component } from 'react';


export class MenuItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }



    render() {
        return (
            <div className="menu-items-parent">
                {this.props.itemsArr.map((value,index) => {
                return (<div  onClick={this.props.clickAction} key={value.id} className="item" id={value.id}>
                            <div>
                                <h4>{value.title}</h4>
                                <h4>{value.explanation}</h4>
                            </div>
                            <div>
                                <p>{value.temperature} °C</p>
                                <p>{value.time} min</p>
                            </div>
                        </div>)
                })}
            </div>
        )
    }
}

export default MenuItems;
