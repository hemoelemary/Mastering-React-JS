import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

function MovieSearch() {
const [dt,setDt]=useState()
const [loading,isLoading]=useState(true)
const {name} = useParams()
useEffect(()=>{
    async function get(){
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1&api_key=055c16f324f2acfaec4c944e081bd91e`)
        const result = await response.json()
        setDt(result.results)
        isLoading(false)
    }
    get()
},[name])
    
    const imagepath = 'https://image.tmdb.org/t/p/w500'
    return (
        <div>
            <h4 className='fo justify-self-start px-5 text-xl text-white'>Popular Movies</h4>
            <div className='flex my-2 justify-around items-center flex-wrap gap-2'>
            
            {loading==true?'loading...':dt.map((v)=>{
                const link =`/movie/id/${v.id}`
                return(
                    <div className='shadow-xl flex flex-col justify-center p-2 w-[200px] h-[400px] bg-slate-900 gap-2'>
                        <img src={imagepath+v.poster_path} style={{height:'300px'}}></img>
                        <h3 className='fo text-wrap text-center'>{v.title}</h3>
                        <Link to={link} className='rounded-full bg-blue-600 fo text-white'>Visit</Link>
                    </div>
                )
                }
            )}
            </div>
        </div>
  )
}

export default MovieSearch