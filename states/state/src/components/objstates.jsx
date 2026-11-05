import {useState} from 'react'
const ObjS = ()=>{
    const [movie,setMovie]=useState({
        name:'starwars',
        ratings:9,

    })
    const changeRating = ()=>{
        setMovie({...movie,ratings:10})
    }

    const [movies,setMovies] = useState([
        {id:1,title:'spiderman'},
        {id:2,title:'superman'}
    ])
    const namech=()=>{
        setMovies(movies.map((v)=>{v.id==2?{...v,title:'hamodaman'}:v}))
    }
    const [games,setGames]=useState([
        {id:1,name:'mario'},
        {id:2,name:'minecraft'},
        {id:3,name:'pubg'}
    ])
    const gamej = ()=>{
        setGames(games.map((v)=>v.id==3?{...v,name:'freefire'}:v))
    }
    return(
        <>
        <h1>title: {movie.name}</h1>
        <small>Ratings: {movie.ratings}</small>
        <button onClick={changeRating}>Change Rating</button>
        <ul>
            <li>{movies.map((v)=>{
                return(
                <div key={Math.random()*10}>
                <small>    
                {v.id}
                </small>
                <h2>
                {v.title}
                </h2>
                </div>
                
            )
                
            })}</li>
            <button onClick={namech}>ChangeName</button>
        </ul>
        <ul>
            {games.map((v)=>{
                return(
                    <li key={Math.random()}>
                        {v.name}
                    </li>
                )
            })}
        </ul>
        <button onClick={gamej}>change name of pubg</button>
        </>
    )
}

export default ObjS;