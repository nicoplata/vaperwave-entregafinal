import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} ></Route>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} ></Route>
          <Route path='/cart' element={<Cart />} ></Route>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
