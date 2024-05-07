import React, { useCallback, useMemo, useState } from 'react';
import ExampleList from './ExampleList';

function Example2(props) {
    const [theme, setTheme] = useState(true)
    const [num, setNum] = useState(0);
    const handleTheme = {
        background: theme ? 'white' : 'black',
        color: theme ? 'black' : 'white'
    }


//whithout Callback hook
    const getData = useCallback((val) => {
        console.log("UseCallback");
        return [num+val, num *2+val, num * 4+val]
    },[num])
    return (
        <div style={handleTheme}>
            <br></br><br></br><br></br><br></br>

            <button onClick={() => setTheme(!theme)}>Change Theme</button>

            <h2>Use Call back</h2>
            <input type='number' onChange={(e) => setNum(parseInt(e.target.value))} />

            <ExampleList examList={getData} />

        </div>
    );
}

export default Example2;