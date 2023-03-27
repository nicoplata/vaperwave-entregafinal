import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/Navbar';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} ></Route>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} ></Route>
            <Route path='/cart' element={<Cart />} ></Route>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} ></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
