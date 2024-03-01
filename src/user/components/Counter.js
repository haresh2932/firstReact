import React, { useState } from 'react';

function Counter(props) {

    const [Count, setCount] = useState(0)
    // const [DecCount,setDecCount]=useState(5)
    // const changeCount = ()=>{


    // }

    return (
        <>
            <button onClick={() => setCount(Count + 1)} disabled={Count < 5 ? false : true}>+</button>
            <h1>Count:{Count}</h1>
            <button onClick={() => setCount(Count - 1)} disabled={Count === 0 ? true : false} >-</button>




        </>
    );
}

export default Counter;