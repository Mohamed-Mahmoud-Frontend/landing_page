import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  ProductPage  from './component/ProductPage';
import OrderForm from './component/OrderForm/OrderForm';
import NavBar from './component/Navbar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
