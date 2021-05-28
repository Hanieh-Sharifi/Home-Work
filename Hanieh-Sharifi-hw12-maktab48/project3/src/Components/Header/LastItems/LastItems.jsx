import React, { Component } from 'react'

export class LastItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <div className="item" id={this.props.item.id}>
                    <div>
                        <h4>{this.props.item.title}</h4>
                        <h4>{this.props.item.explanation}</h4>
                    </div>
                    <div>
                        <p>{this.props.item.temperature} °C</p>
                        <p>{this.props.item.time} min</p>
                    </div>
                </div>
                <div className="buttons">
                    <button id={`start${this.props.item.id}`} onClick={this.props.handleInterval}>Start timer</button>
                    <button id={`cancel${this.props.item.id}`} onClick={this.props.deleter}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default LastItems;
