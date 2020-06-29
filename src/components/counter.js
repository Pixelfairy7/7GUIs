import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props);
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    state={
        count: 0,
    }
   

    incrementCounter =()=>{
        this.setState({count: this.state.count +1})
    }
    render() {
        return (
            <div className="project-container">
            <h2>Counter</h2>
                <div className="counter">
                    <span className="counter-display">{this.state.count}</span>
                    <button className="btn counter-btn" onClick={this.incrementCounter}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter
