import { use } from "react"
import { useState } from "react"
import State from "./components/states"

function App() {
  // const counter = useState(0)
  // console.log(counter)
  const [friend,setFriend]=useState(['alex','john'])
  const [counter,setCounter]=useState(0)
  const change = ()=>{
    setCounter(counter+1)
  }
  const decrement = ()=>{
    setCounter(counter-1)
  }
  const addFriend = ()=>{
    setFriend([...friend,'huxnwebdev'])
  }
  const remove = ()=>{
    // const copy = [...friend]
    // copy.pop()
    // setFriend(copy)
    setFriend(friend.filter((f)=>f!='john'))
  }
  const update=()=>{
    setFriend(friend.map(f=>f==='alex'?'alex smith':f))
  }
  return (
    <>  
    <div>App</div>
    <div>{counter}</div>
    <button onClick={change}>+</button>
    <button onClick={decrement} disabled={counter==0?true:false}>-</button>
    <button onClick={update}>Update</button>
    <section>
      <ul>
      {friend.map((v)=>{
        return(<li key={Math.random()}>{v}</li>)
      })}
      </ul>
      <button onClick={addFriend}>
      add new
      </button>
      <button onClick={remove}>Remove Friend</button>
    </section>
    <hr/>
    <State></State>
    </>
  )
}

export default App