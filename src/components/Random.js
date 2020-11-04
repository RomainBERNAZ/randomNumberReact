import React, { useState } from 'react';




const Random = () => {

const [min, setMin] = useState(0);
const [max, setMax] = useState(10);
const [random, setRandom] = useState(5);



const randomizer = () => {
setRandom(Math.floor(Math.random() * (max - min +1) +min));
}

return (
<div className="container">
    <h1><span>R</span>ANDOM NUMBE<span>R</span></h1>
    <div className="card">
        <div className="number">
            <p><span>{random}</span></p>
        </div>
        <div className="column">
            <input value={min} onChange={e=> setMin(+e.target.value)} type="number" />
            <input className="inputLeft" value={max} onChange={e=> setMax(+e.target.value)} type="number" />
        </div>
        <button onClick={randomizer}>Get A Random Number</button>
    </div>
</div>
);
}


export default Random;