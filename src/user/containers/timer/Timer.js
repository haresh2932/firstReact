import React, { Component } from 'react';
import Style from './Timer.module.css'

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    //3.It is called after mounting .It is mostly used to get data from server 
    componentDidMount = () => {
        // console.log("3.componentDidMount");
        this.timeRef = setInterval(this.tick, 1000)
    }

    //4. It is called when state or props value Changed 
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.time !== prevState.time) {
            // console.log("4 componentDidUpdate");

        }

    }

    //5.It is Used release 
    componentWillUnmount = () => {
        clearInterval(this.timeRef);
    }


    render() {
        return (
            <div >

                <h2>Timer</h2>
                <h3 class={Style.time}>{this.state.time.toLocaleTimeString()}</h3>
             

            </div>
        );

    }

  



 
}



export default Timer;