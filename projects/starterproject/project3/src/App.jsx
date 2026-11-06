import React from 'react'

function App() {
  // const products = ['burger','pizza','sandwich']
  const products = [
    {id:1,
      name:'burger',
      price:120
    },
    {
      id:2,
      name:'Pizza',
      price:150
    },
    {id:3,
      name:'sandwich',
      price:80
    }
  ]
  const expensive = products.filter((v)=>v.price>100)
  return (
    <div>
      {products.map((v)=>{
        return(
          <div>
          <h2>{v.name}</h2>
          <p>{v.price}EGP</p>
          </div>
        )
      })}

      <div>
        {expensive.map((v)=><div key={v.id}>{v.name}</div>)}
      </div>
    </div>
  )
}

export default App;