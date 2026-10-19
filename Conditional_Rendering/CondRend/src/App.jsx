const ValidPassword = ()=><h1>Valid</h1>
const InvalidPassword = ()=><h1>Invalid</h1>
const Password = ({isValid})=>isValid?<ValidPassword/>:<InvalidPassword/>
    // if (isValid){
    //   return <ValidPassword></ValidPassword>
    // }
    // else{
    //   return <InvalidPassword></InvalidPassword>
    // }

const Weather= ({temp})=>{
  if(temp <=15){
    return 'It is Cold Outside';
  }else if(15<temp && temp<25){
    return 'It is nice outside';
  }else{
    return 'it is hot outside';
  }
}

const Cart=()=>{
  const items = [
    'Wireless Earbuds',
    'Power Bank',
    'New SSD',
    'Hoddie'
  ];




  return (<>
    <h1>Cart</h1>
    {items.length >0 && <h2>You have {items.length} items in your cart</h2>}

    <ul>
      {items.map((v,i)=>{
        return <li key={i}>{v}</li>
      })}
    </ul>
  </>  
)
}

const UserStatus = ({loggedIn,isAdmin})=>{
  return(
    <>  
    {(loggedIn && isAdmin) && (<h1>welcome admin</h1>)}
    {(loggedIn && !isAdmin) && (<h1>welcome User</h1>)}
    </>
  )

}

const Greeting = ({timeOfDay})=>{
return(
  <>
    {timeOfDay=='morning'?'Good Morning':'Good Afternoon'}
  </>
)
}

const App=()=>{
  return(
    <>
      <Password isValid={false}/>
      <Cart/>
      <Weather temp={15}/>
      <UserStatus loggedIn={true} isAdmin={false}></UserStatus>
      <Greeting timeOfDay='morning'></Greeting>
    </>
  )
}

export default App