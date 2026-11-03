import './app.css'
import { CiShoppingCart } from "react-icons/ci";
import StyledCard from './components/styledcarts';
import { LuCarTaxiFront } from "react-icons/lu";
import { Cart2 } from './components/cart2';
import ProfileCard from './components/ProfileCard';
const App = ()=>{
  const styles = {color:'white',backgroundColor:'teal',padding:'2rem'}
  const style2= {backgroundColor:'lightgray',padding:'15px',border:'8px solid black',color:'black'}
  return (
    <div>
      <h1 style={styles}>Hello</h1>
      <StyledCard/>
      <CiShoppingCart />
      <div style={style2}>
      </div>
      <LuCarTaxiFront />
      <Cart2/>
      <ProfileCard></ProfileCard>
    </div>
  )
}
export default App;