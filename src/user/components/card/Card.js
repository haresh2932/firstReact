import React from 'react';
import Style from './Card.module.css'


function Card({ data}) {
    console.log(data);
    return (
        <div>
            <div class={Style.container} id={Style.medicineCard}>
                <div class={Style.banner}>


                </div>


                <div class={Style.wrapper}>
                    <h1>{data.name}</h1>
                    <h3>{data.price}</h3>
                    <h3>{data.expiry}</h3>
                    <p>{data.desc}</p>
                </div>
                <div class={Style.button}>
                    <button class={Style.btn} >DETAILS</button>
                    <button class={Style.btn} fill>BUY NOW</button>
                </div>

            </div>
            <div class={Style.container} id={Style.doctorCard}>
                <div class={Style.banner}>


                </div>

                <div class={Style.wrapper}>
                    <h1>{data.doctor_name}</h1>
                    <h3>{data.fee}</h3>
                    <h3>{data.time}</h3>
                    <p>{data.degr}</p>
                    <p>{data.spec}</p>

                </div>
                <div class={Style.button}>
                    <button class={Style.btn} >DETAILS</button>
                    <button class={Style.btn} fill>BOOK NOW</button>
                </div>

            </div>

        </div>
    );
}

export default Card;