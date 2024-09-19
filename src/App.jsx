import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  ProductPage  from './component/ProductPage';
import OrderForm from './component/OrderForm/OrderForm';
import NavBar from './component/Navbar';
import OrdersTable from './page/OrdersTable';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/OrdersTable" element={<OrdersTable />} />
      </Routes>
    </Router>
  );
}

export default App;
