import Person from "./components/person"
import Products from "./components/products"
const App = ()=>{
  return (
    <>
    <User name='Hamoda' img='https://avatars.githubusercontent.com/u/228161339?v=4' age={19} hobbies={['coding','reading','sleeping']}></User>
    <Person name='Hamoda' age={12}></Person>
    <Products name='Shop' price='30EGP'></Products>
    </>
  )

}

const User = ({img,name,age,hobbies})=>{
  
  return <section>
    <h1>Name:{name}</h1>
    <h1>Name:{age}</h1>
    <h1>Name:{hobbies}</h1>
    <img src={img} alt={name} width={200}></img>
  </section>
}
export default App;
