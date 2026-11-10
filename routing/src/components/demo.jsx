import React from 'react'
import {useNavigate} from 'react-router-dom'


function Demo() {
  const navigate = useNavigate()
  function handlelogin(){
    // navigate(-1) last page
    // navigate(1) forward page 
    navigate('/about')
  }
  return (
    <div>
        <nav>
            <Link to=''></Link>

        </nav>
    </div>
  )
}

export default Demo