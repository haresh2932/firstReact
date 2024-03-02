import React ,{useState}from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const [CountryName,setContryName]=useState('India')
    const [TimeZone,setTimeZone]=useState('Gmt+5:30')
    // const [CityName,setCityName]=useState(props.CityName)
    
    const changeCountry=()=>{
        // console.log("gvsdyfgsdf");
        setContryName('Usa')
        setTimeZone('EMT-5:00')
    }

    return (
        <>
            <h1>Country</h1>
            <h1>My Country is {CountryName}.</h1>
            <h1>My Country TimeZone is {TimeZone}.</h1>
            {/* <h2>My City is {CityName}.</h2> */}
            <button onClick={changeCountry}>ChangeContry</button>
            <CityFun countryName={CountryName}/>
        </>
    );
}



export default CountryFun;