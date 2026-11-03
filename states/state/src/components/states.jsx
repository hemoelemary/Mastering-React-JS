import { useState } from "react";

const State=()=>{
    const [count,setCount]=useState(0)
    const [people,setPeople]=useState(['mohamed','ahmed'])
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const addPeople=()=>{
        setPeople([...people,'hamoda'])
    }
    const removePeople=()=>{
        setPeople([...people].filter((v)=>v!=='ahmed'))
    }
    const update=()=>{
        setPeople([...people].map((v)=>v=='hamoda'?'hamodaelemary':v))
    }
    return(
    <>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement} disabled={count==0?true:false}>-</button>        
        <ul>
            {people.map((v)=>{
                return(<li>{v}</li>)
            })}
        </ul>
        <button onClick={addPeople}>AddPeople</button>
        <button onClick={removePeople}>removePeople</button>
        <button onClick={update}>updatePeople</button>
    </>
    )
}
export default State;