import React, { Component } from 'react'

export class Title extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="title-parent">
                {this.props.item}
            </div>
        )
    }
}

export default Title;
