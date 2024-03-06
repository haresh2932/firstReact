import React, { useEffect, useState } from 'react';
import Style from './Timer.module.css'

function TimerFun(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('Component mount');
        const timeRef = setInterval(() => { setDate(new Date()) }, 1000);


        return () => {
            clearInterval(timeRef)
        };
    }, [])
    const time = date.toLocaleTimeString()
    return (

        <div>
            <h1>Timer</h1>
            <h3 class={Style.time}>{time}</h3>
        </div>
    );
}

export default TimerFun;