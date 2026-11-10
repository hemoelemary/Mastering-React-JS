import React from 'react'
import {Routes,Route,Link,NavLink, useParams} from 'react-router-dom'


function Home(){
  return (
  <>
    <h1>Home</h1>
    <Link to='/about'>about</Link> 
    {/* client side navigation for website pages only */}
    <nav>
      <NavLink to='/' className={({isActive})=>isActive?'active':''}>home</NavLink>
    </nav>
  </>
)
}

function About(){
  return(
    <>
      <h2>About</h2>
    </>
  )
}

function ProductDetails(){
  const {id} = useParams()
  return(
    <>
      <h1>{id}</h1>
    </>
  )
}
function NotFound(){
  return <h1>404</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App