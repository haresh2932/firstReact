import './Card.css'
import React from 'react';


function Card({ data }) {
    console.log(data);
    return (
        <>
            <div class="container" id='medicineCard'>
                <div class="banner-image">


                </div>


                <div class="wrapper">
                    <h1>{data.name}</h1>
                    <h3>{data.price}</h3>
                    <h3>{data.expiry}</h3>
                    <p>{data.desc}</p>
                </div>
                <div class="button-wrapper">
                    <button class="btn outline">DETAILS</button>
                    <button class="btn fill">BUY NOW</button>
                </div>

            </div>

        </>
    );
}

export default Card;