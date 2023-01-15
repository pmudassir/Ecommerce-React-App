import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;  //checking if user is already logged in or registered if true user will be navigated to home page
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user?(<Navigate replace to="/"/>) : (<Login/>)}/>
        <Route path="/register" element={user?(<Navigate replace to="/"/>) : (<Register/>)}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  );
};

export default App;