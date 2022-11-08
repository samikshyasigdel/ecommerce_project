import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Regiter";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import React from 'react'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/productlist" element={<ProductList/>} />
        <Route exact path="/cart" element={<Cart/>} />

      </Routes>
    </Router>
  )
}

export default App