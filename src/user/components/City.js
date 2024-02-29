import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Surat",
            area:"640km"
        }
    }
    
    render() {
        return (
            <>
                <h2>City</h2>
                <h3>My City {this.state.name}</h3>
                <h3>My City Area:{this.state.area}</h3>

            </>
        );
    }
}

export default City;