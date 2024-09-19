import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-white text-2xl font-bold">Dev/Mohamed</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Product</Link>
            <Link to="/OrdersTable" className="text-white hover:text-gray-300">tableData</Link>
          </li>
          <li>
            {/* <Link to="/order" className="text-white hover:text-gray-300">Order</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
