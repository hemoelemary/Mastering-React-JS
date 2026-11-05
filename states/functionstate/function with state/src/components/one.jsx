import React, { useState } from 'react'
function One() {
    const [count,setCount]=useState(()=>{
        const initialCount = 10;
        return initialCount
    })
    const increment=()=>{
        setCount((count)=>count+1)
    }
    return (
        <div>
            {count}
            <button onClick={increment}></button>
        </div>
    )
}

export default One