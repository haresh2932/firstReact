import React ,{useState}from 'react';

function CountryFun(props) {
    const [Country,setContry]=useState('India')
    const [Timezone,setTimezone]=useState('Gmt+5:30')
    
    const changeCountry=()=>{
        // console.log("gvsdyfgsdf");
        setContry('Usa')
        setTimezone('EMT-5:00')
    }

    return (
        <>
            <h1>My Country is {Country}.</h1>
            <h1>My Country TimeZone is {Timezone}.</h1>
            <button onClick={changeCountry}>ChangeContry</button>
        </>
    );
}



export default CountryFun;