import React, { Component } from 'react'

export class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            second:1,
            minute:1,
        }
        this.intervalHandle = this.intervalHandle.bind(this);
    }

    componentDidMount = () =>
    {
        this.setState({second: this.props.item.split(":")[1], minute: this.props.item.split(":")[0]});
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.timer !== this.props.timer)
        {
            if (this.props.timer === true)
            {
                this.setState({second: this.props.item.split(":")[1], minute: this.props.item.split(":")[0]});
                this.result = 60*parseInt(this.state.minute) + parseInt(this.state.second);
                this.interval = setInterval(()=> this.intervalHandle(),1000);
                return;
            }
        }
        if (prevProps.item !== this.props.item)
        {
            this.result = 0;
            this.setState({second: this.props.item.split(":")[1], minute: this.props.item.split(":")[0]});
            clearInterval(this.interval);
        }
    }

    intervalHandle()
    {
        if (this.state.minute !== "00" || this.state.second !== "00")
        {
            this.setState({minute:String(Math.floor(this.result/60)).padStart(2, '0'),second:String(this.result%60).padStart(2, '0')});
            this.result = this.result-1;
        }
        else
        {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div className="timer-parent">
                {(this.state.minute !== "00" || this.state.second !== "00") && (`${this.state.minute}:${this.state.second} min left`)}
                {this.state.minute === "00" && this.state.second === "00" && "Your order is ready !"}
            </div>
        )
    }
}

export default Timer;
