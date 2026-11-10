import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/f404'
import Navbar from './components/Navbar'
import MovieSearch from './pages/MovieSearch'
import MovieDetails from './pages/MovieDetails'

function App() {
  const [data,setData]=useState([])
  const [loading,isLoading]=useState(true)
  useEffect(()=>{
    async function getting(){
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=055c16f324f2acfaec4c944e081bd91e')
      const fetcheddata = await response.json()
      setData(fetcheddata.results)
      isLoading(false)
    
    }
    getting()
  },[])
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      
      <Route path='/' element={<Home data={data} loading={loading} isLoading={isLoading} />}></Route>
      <Route path='/movie/:name' element={<MovieSearch data={data} loading={loading} setData={setData} isLoading={isLoading}/>}></Route>
      <Route path='/movie/id/:id' element={<MovieDetails data={data} loading={loading} setData={setData} isLoading={isLoading}/>}></Route>
    
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App