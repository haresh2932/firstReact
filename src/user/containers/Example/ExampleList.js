import React, { useEffect, useState } from 'react';

function ExampleList({examList}) {
    const[data,setData]=useState([])

    useEffect(()=>{
        setData(examList(6))
    },[examList])
   
    return (
        <div>
           <h2>List</h2> 
        
             {data.map((v)=>(
                   <h3> {v}</h3>
                ))} 
            
        </div>
    );
}

export default ExampleList;