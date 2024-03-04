import React, { Component } from 'react';
// import './Card.css'

class CardCls extends Component {
    
    



    render() {
        const { dataDoc } = this.props
        console.log(dataDoc);

        return (
            <>


                <div class="container" id='doctorCard'>
                    <div class="banner-image">


                    </div>
                    <div class="wrapper">
                        <h1>{dataDoc.name}</h1>
                        <h3>{dataDoc.time}</h3>
                        <h3>{dataDoc.fee}</h3>
                        <h3>{dataDoc.degr}</h3>
                        <p>{dataDoc.spec}</p>
                    </div>
                    <div class="button-wrapper">
                        <button class="btn outline">DETAILS</button>
                        <button class="btn fill">Book NOW</button>
                    </div>

                </div>
            </>


        );
    }
}

export default CardCls;