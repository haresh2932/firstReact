import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Surat",
            area:"640km"
        }
    }

    changeCity = () => {
        // console.log("jhdscfjhs");
        this.setState({
            name: 'Navsari',
            area: '400KM'
        })

    }
    
    render() {
        return (
            <>
                <h2>City</h2>
                <h3>My City {this.state.name}</h3>
                <h3>My City Area:{this.state.area}</h3>
                <button onClick={this.changeCity}>ChangeCity</button>
            </>
        );
    }
}

export default City;