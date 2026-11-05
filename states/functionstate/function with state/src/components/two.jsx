import React, { useState } from 'react'

function Two() {
    const [randomNumber,SetRandomNumber] = useState(()=>{
        return Math.floor(Math.random()*100)
    })
    const generateNew = ()=>{
        SetRandomNumber(()=>Math.floor(Math.random()*100))
    }
  return (
    <div>
        <h1>{randomNumber}</h1>
        <button onClick={generateNew}>Generate New</button>
    </div>
  )
}

export default Two