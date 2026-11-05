import React, { useState,useEffect } from 'react'

function Three() {
    const [name,setName]=useState(()=>{
        const savedName = localStorage.getItem('name');
        return savedName?JSON.parse(savedName):''
    })
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name))

    },[name])
    const changeHandle = (event)=>{
        setName(event.target.value)
    }
    const handleClear = ()=>setName('')
  return (
    <div>
        <h1>{name}</h1>
        <input type="text" value={name} onChange={changeHandle} />
        <button onClick={handleClear}>clear</button>
    </div>
  )
}

export default Three