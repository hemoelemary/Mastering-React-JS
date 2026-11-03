import React from 'react'
import Copy from './components/copy'


function App() {
const moveHandler = ()=>{
  alert('mouse move')
}

const Move = ()=>{
  return <p onMouseMove={moveHandler}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quod praesentium. Quas nam modi deleniti, molestiae ipsam itaque explicabo sequi earum, non, obcaecati a reiciendis! Suscipit molestiae totam placeat fugit!
  </p>
}
  return (
    <>
    <Move></Move>
      <Copy/>
    </>
  )
}

export default App