
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import { Routes,Route } from 'react-router-dom';
import Products from './Screen/Products/products';
import Cart from './Screen/Cart/cart';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
