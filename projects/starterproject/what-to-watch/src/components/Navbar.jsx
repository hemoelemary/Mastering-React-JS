import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    
    const navigate = useNavigate()
  function changeHandler(event){
    if(event.target.value){
        navigate('/movie/'+event.target.value)
    }else{
        navigate('/')
    }
        
  }
  return (
    <>
    
    <div className='flex fo justify-between items-center p-5'>
        <div className="logo ">What-to-watch</div>
        <input className='bg-white text-black' name='query' onChange={changeHandler}></input>
        <NavLink to='/' className={(isActive)=>isActive?'active':''}>Home</NavLink>
    </div>
    <hr className='mb-2'></hr>
    </>
  )
}

export default Navbar