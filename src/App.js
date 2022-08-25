import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './containers/Navbar';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Sidebar from './containers/Sidebar';
import { useState, useEffect } from 'react';
import Loader from './containers/Loader';
import Wallet from './containers/Wallet';
import Cart from './containers/Cart';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for n seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (

    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/cart" element={<Cart />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
