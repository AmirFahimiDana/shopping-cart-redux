import React from 'react';

import spinner from "../../gif/Infinity.gif"

const Loader = () => {
    return (
        <div style={{width:"100%" ,textAlign:"center"}}>
            <img src={spinner} alt="Loading" />
        </div>
    );
};

export default Loader;