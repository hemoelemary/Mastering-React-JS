import React, { useState } from 'react'

function App() {
  const [counter,setCounter]=useState(0)
  const [clicked,isClicked]=useState(false)
  const [interval,setIntervalel] = useState()
  const clickHandler = ()=>{
    const intervalId = setInterval(()=>{
      setCounter(counter=>counter+1)
    },1000)
    setIntervalel(intervalId)
    isClicked(true)
  }
  const stopHandler = ()=>{
    clearInterval(interval)
    isClicked(false)
  }
  return (
    <div className='container h-full  m-auto flex flex-col justify-center' style={{alignItems:'center'}}>
      <h1 className='text-white text-xl fon'>Counter</h1>
      <h2 className='text-white text-xl fon'>{counter}</h2>
      {clicked?<>
        <button className='bg-white rounded-full fon p-2' onClick={stopHandler}>stop</button>
      </>:<>
      <button className='bg-white rounded-full fon p-2' onClick={clickHandler}>start</button>
      </>}
    </div>
  )
}

export default App;