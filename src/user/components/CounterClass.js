import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state={Count:0}
    }

    handleIncrease =()=>{
        this.setState({Count:this.state.Count+1})
    }

    handleDecrease =()=>{
        this.setState({Count:this.state.Count-1})
    }
    
    render() {
        return (
            <>
            <br></br>
            <button onClick={this.handleIncrease} disabled={this.state.Count < 5 ? false : true}>+</button>
            <h1>Count:{this.state.Count}</h1>
            <button onClick={this.handleDecrease} disabled={this.state.Count === 0 ? true : false} >-</button>

                
            </>
        );
    }
}

export default CounterClass;