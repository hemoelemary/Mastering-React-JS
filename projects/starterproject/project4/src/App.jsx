import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [count,setCount]=useState(0)
  const increment = ()=>{
    setCount(count=>count+1)
    setCount(count=>count+1)
  }
  // useEffect(()=>{},[]) on empty launch func when the page open
  // useEffect(()=>{console.log('count changed',count)},[count]) on count change
  // useEffect(()=>{console.log('rendered')}) on all renders
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount(count+1)
    },1000)
    return ()=>{
      clearInterval(timer);
    }
  },[])
  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App