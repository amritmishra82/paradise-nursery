import './App.css';
import { useState } from 'react';
import ProductList from './ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app-container">
      {!showProducts ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
