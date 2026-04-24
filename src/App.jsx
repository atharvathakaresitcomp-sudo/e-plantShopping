import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="landing">
        <h1>Paradise Nursery</h1>
        <Link to="/plants">
          <button>Get Started</button>
        </Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
