import './app.css'
import { CiShoppingCart } from "react-icons/ci";
import StyledCard from './components/styledcarts';
import { LuCarTaxiFront } from "react-icons/lu";
const App = ()=>{
  const styles = {color:'white',backgroundColor:'teal',padding:'2rem'}
  const style2= {backgroundColor:'lightgray',padding:'15px',border:'8px solid black',color:'black'}
  return (
    <div>
      <h1 style={styles}>Hello</h1>
      <StyledCard/>
      <CiShoppingCart />
      <div style={style2}>
      <LuCarTaxiFront />

      </div>
    </div>
  )
}
export default App;