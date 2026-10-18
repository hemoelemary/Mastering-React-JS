import JSXRules from './components/jsxrules'
import Greeting from './components/dynamic';
import ProductInfo from './components/productinfo';
import UserList from './components/usrlist';
const App = ()=>{
  const myName = 'Hamoda';
  const multiply = (a,b)=>a*b;
  const specialClass = 'simple-class';
  const numbers = [1,2,3,4,5];
   const usersInfo = [
    {
      username: "HuXn",
      email: "test@gmail.com",
      location: "USA",
    },
    {
      username: "John",
      email: "jd@gmail.com",
      location: "Arab",
    },
    {
      username: "Alex",
      email: "alexmersion@gmail.com",
      location: "India",
    },
  ];
  return( <section>
    <h1>My Website</h1>
    <article>
      <h2>Welcome To React</h2>
      <p className='text'>Paragraph Content</p>
      <label htmlFor=""></label>
    </article>
    <div>
      <h1>
        {myName}        
      </h1>
      <p>{[1,2,3,4]}</p>
      <p>2*2:{multiply(2,2)}</p>
      <p className={specialClass}>special</p>
      <Greeting></Greeting>
      <ProductInfo></ProductInfo>
      <JSXRules></JSXRules>
      <div>
        <ul>
        {numbers.map(number=>(
        
            <li key={number}>{number}</li>  
        ))}
        </ul>
        <ul>
          {usersInfo.map(({username,email,location})=>(
            <li key={Math.random()}>
              {username}
              {location}
            </li>
          ))}
        </ul>
      </div>

    </div>
    <UserList></UserList>
  </section>
  )
}

export default App ;