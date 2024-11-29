import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import MonthlyStats from './components/MonthlyStats';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard Taller</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <ProductForm onSubmit={handleAddProduct} />
              <MonthlyStats products={products} />
              <ProductTable products={products} onDelete={handleDeleteProduct} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;