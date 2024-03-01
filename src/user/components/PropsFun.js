import React from 'react';

function PropsFun (props) {    
        return (
            <div>
                <h4>Name:{props.name}</h4>
                <h6>Age:{props.age}</h6>            
            </div>
        );
   
}

export default PropsFun;