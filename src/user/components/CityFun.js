import React ,{useState}from 'react';

function CityFun({countryName}) {
    const [CityName,setCityName]=useState('Surat')
    const [Area,setArea]=useState('327km2')
    console.log(countryName);
    
    const changeCity=()=>{
        // console.log("gvsdyfgsdf");
        setCityName('Ahemdabad')
        setArea('464.17 km2')
    }

    return (
        <>
            <h1>My City is {countryName === 'India'?'Delhi':'Chicago'}.</h1>
            <h1>My City's area is :{countryName === 'India'?'2000km2':'640KM2'}</h1>
            {/* <button onClick={changeCity}>ChangeCity</button> */}
            

        </>
    );
}



export default CityFun;