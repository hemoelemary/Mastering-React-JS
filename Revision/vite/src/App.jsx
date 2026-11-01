import X from "./components/x";

const Y = ({name,age})=>{
  // props dont change
return(
  <>
    <h1>
      {name}
    </h1>
    <h2>{age}</h2>
  </>
)
}

function App(){
  const name = 'hamoda';
  const isLoggedIn = true;
  const isThisTrue = true;
  const count = 0;
  return(
    <>
    <h1>Hello , {name}</h1>
    <p className='cls'>I Like JSX</p>
    <p>We use htmlFor and className and we close tags that dont close in normal html</p>
    <X name='yay' age={12}></X>
    {isLoggedIn?<Y name='mohamed' age={20}></Y>:<h3>mm</h3>}
    {isThisTrue&&<h1>Yess</h1>}
    {count && <h2>yo</h2>}
    <h6 style={{'color':'red','backgroundColor':isThisTrue?'green':'blue'}}>redblue</h6>
    </>
  )
}

export default App;