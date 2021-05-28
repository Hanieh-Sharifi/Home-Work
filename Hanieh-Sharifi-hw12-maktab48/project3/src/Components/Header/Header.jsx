import React, { Component } from 'react';
import Title from "./Title/Title";
import Timer from "./Timer/Timer";
import LastItems from "./LastItems/LastItems";

export class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timer:false,
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.selected !== this.props.selected)
        {
            this.setState({timer: false});
        }
    }



    
    render() {
        return (
            <div className="header-parent">
                <Title item={this.props.selected.title} />
                <Timer timer={this.state.timer} item={this.props.selected.time}/>
                <div className="last-items-parent">
                    <LastItems handleInterval={() => this.setState({timer:true})} deleter={(e) => {this.props.deleteItem(e);this.setState({timer:false})}} item={this.props.selected}/>
                </div>
            </div>
        )
    }
}

export default Header;
