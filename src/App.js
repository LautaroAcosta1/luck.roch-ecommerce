import './App.css';
import Home from './components/home/Home'
import CartContent from './components/cartContent/CartContent'
import Products from './components/products/Products';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import DataProvider from './components/context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<CartContent/>}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
