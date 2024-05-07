import React, { useMemo, useState } from 'react';

function Example(props) {
    const [counter,setCounter]=useState(0);
    const [num,setNum]=useState(0);
    const handleCounter=()=>{
        setCounter((prev)=>prev+1)
        console.log(counter);
    }


    const result=()=>{
        
        let fact=1;
        for(let i=num;i>=1;i--){
            fact=fact*i;
        }
        console.log(fact);
        return fact;
    }
//useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
    const ans=useMemo(()=>{
        return result()
    },[num])

   
    return (
        <div> 
            <h2>useMemo</h2>
            <button onClick={handleCounter}>Counter</button>
            <span>{counter}</span>
            <input type='number'onChange={(e)=>setNum(parseInt(e.target.value))}/>  
            <span>{ans}</span>          
        </div>
    );
}

export default Example;