import React from 'react'
import { Link } from 'react-router-dom'

function Home({data,loading}) {
    const imagepath = 'https://image.tmdb.org/t/p/w500'
    return (
        <div>
            <h4 className='fo justify-self-start px-5 text-xl text-white'>Popular Movies</h4>
            <div className='flex my-2 justify-around items-center flex-wrap gap-2'>
            
            {loading==true?'loading...':data.map((v)=>{
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

export default Home