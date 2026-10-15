import JSXRules from './components/jsxrules'
const App = ()=>{
  const myName = 'Hamoda';
  multiply = (a,b)=>a*b
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
      <p>2*2</p>
      <JSXRules></JSXRules>
    </div>
  </section>
  )
}

export default App ;