import React, { useEffect, useState } from 'react';
import Style from './Timer.module.css'

function TimerFun(props) {
    const [time, setTime] = useState(new Date());

    const tick=()=>{
        console.log("tick");
        setTime(new Date())
    }

    useEffect(() => {
        console.log('Component mount');
        //3.in Start work like Component did mount 
        //4.after that work like component did update 
        const timeRef = setInterval( tick, 1000);

        //5.component will unmount 
        return () => {
            clearInterval(timeRef)
        };
    }, [])

    //2 display just like rander
    return (
        <div>
            <h1>Timer</h1>
            <h3 class={Style.time}>{time.toLocaleTimeString()}</h3>
        </div>
    );
}

export default TimerFun;