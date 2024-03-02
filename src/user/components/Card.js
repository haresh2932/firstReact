import React from 'react';

function Card({ data }) {
    console.log(data);
    return (
        <div>
            <h1>{data.name}</h1>
            <h2></h2>

        </div>
    );
}

export default Card;