import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            name: 'India',
            timezone: 'GMT+5:30'
        }
    }

    changeContry = () => {
        // console.log("jhdscfjhs");
        this.setState({
            name: 'Usa',
            timezone: 'Est-5:00',
            // name:'Chicaggo'
        })
    }

    render() {
        return (
            <>
                <h2>Country</h2>
                <h3>My Country is {this.state.name}</h3>
                <h3>My Country TimeZone: {this.state.timezone}</h3>
                {/* <h3>My City is {this.props.CityName}</h3>
                 */}
                <button onClick={this.changeContry}>ChangeContry</button>
                <City countryName={this.state.name} />
            </>
        );
    }
}

export default Country;