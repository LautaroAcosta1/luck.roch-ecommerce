import React from 'react';
import ReactDOM from 'react-dom/client';
import DataProvider from './components/context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContent from './components/cartContent/CartContent'
import Products from './components/products/Products';
import Service from './components/service/Service';
import Home from './components/home/Home'
import './index.css';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <BrowserRouter>
      <Slider/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/cart' element={<CartContent/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </DataProvider>
);