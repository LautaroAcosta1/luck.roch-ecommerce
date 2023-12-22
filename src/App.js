import './App.css';
import Home from './components/home/Home'
import CartContent from './components/cartContent/CartContent'
import Products from './components/products/Products';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartContent/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
