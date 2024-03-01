import React ,{useState}from 'react';

function CountryFun(props) {
    const [CountryName,setContryName]=useState('India')
    const [TimeZone,setTimeZone]=useState('Gmt+5:30')
    
    const changeCountry=()=>{
        // console.log("gvsdyfgsdf");
        setContryName('Usa')
        setTimeZone('EMT-5:00')
    }

    return (
        <>
            <h1>My Country is {CountryName}.</h1>
            <h1>My Country TimeZone is {TimeZone}.</h1>
            <button onClick={changeCountry}>ChangeContry</button>
        </>
    );
}



export default CountryFun;