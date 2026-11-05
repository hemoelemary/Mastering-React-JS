import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-around p-3'>
        <h3 className='flex-1 font-semibold'>ME</h3>
        <div className="flex font-semibold flex-1 flex-shrink-0 justify-around align-middle gap-10">
            <a>Projects</a>
            <a>About</a>
            <a>Writings</a>
            <a>Contact</a>
        </div>

    </div>
  )
}

export default Navbar