import axios from "axios";
import React, { useEffect, useState } from 'react';

async function Data( props) {

    useEffect(()=>{
        const [data,setdata]=useState([])
        try {
            const response=  axios.get('/localhost:8000/products')
            setdata(response.data);
        } catch (error) {
            console.error('fetching data error:',error);
        }
        console.log(data);

    })

}

export default Data;