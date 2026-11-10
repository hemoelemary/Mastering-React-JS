import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails() {
    const [data,setData]=useState([])
    const imagelink = 'https://image.tmdb.org/t/p/w500'
    const {id} = useParams([])
    useEffect(()=>{

        async function get(){
            const da = await fetch(`https://api.themoviedb.org/3/movie/${id}?include_adult=false&language=en-US&page=1&api_key=055c16f324f2acfaec4c944e081bd91e`);
            const response = await da.json();
            setData([response])
        }
        get()
    },[])
    return (
        <>
            {data.map((v)=>{
                let url =`url(${ imagelink+v.backdrop_path})`
                let img = imagelink+v.poster_path
                return(<div className='flex flex-col gap-4'>
                    <div className='w-full text-center fo text-white h-[100px] mx-auto bg-cover bg-center bg-no-repeat' style={{backgroundImage:url}}>
                        <div className='bg-[rgba(0,0,0,0.5)] flex justify-center items-center w-full h-full'>
                            {v.title}
                        </div>
                    </div>
                    <img src={img} className='w-[200px] mx-auto h-[300px]'/>
                    <h3 className='text-white fo'>Overview</h3>
                    <p>
                        {v.overview}
                    </p>
                </div>)
            })}
        </>
    )
}

export default MovieDetails