import React ,{useState}from 'react';

function CityFun(props) {
    const [CityName,setCityName]=useState('Surat')
    const [Area,setArea]=useState('327km2')
    
    const changeCity=()=>{
        // console.log("gvsdyfgsdf");
        setCityName('Ahemdabad')
        setArea('464.17 km2')
    }

    return (
        <>
            <h1>My City is {CityName}.</h1>
            <h1>My City's area is {Area}.</h1>
            <button onClick={changeCity}>ChangeCity</button>
        </>
    );
}



export default CityFun;