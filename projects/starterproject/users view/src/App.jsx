import React, { useEffect, useState } from 'react'

function App() {
  const [users,Setusers]=useState([])
  const [loading,isLoading]=useState(true)
  useEffect(()=>{
    async function loadUsers(){
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const response = await data.json();
      Setusers(response)
      isLoading(false)
    }
    loadUsers()
  },[])
  if (loading){
    return(<>loading....</>)
  }
  return(
    <>
      {users.map((v)=>{
        return(
          <div key={v.id}>
            <h1>{v.name}</h1>
          </div>
        )
      })}
    </>
  )
}

export default App