import React from 'react'

function UserCard({name,age,isOnline}) {
    const alerting = ()=>{
        alert(age)
    }
    return (
    <div className='shadow-lg '>
        <h1>{name} {isOnline?<span className='rounded-full inline-block h-[10px] w-[10px] bg-green-500'/>:<span className='rounded-full inline-block h-[10px] w-[10px] bg-red-400'/>} </h1>
        <button onClick={alerting}>ShowAge</button>
    </div>
  )
}

export default UserCard