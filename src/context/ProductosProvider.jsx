import { useEffect, useState } from 'react';
import { ProductosContext } from './ProductosContext';
import axios from 'axios';

export const ProductosProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/productos');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <ProductosContext.Provider value={{ products }}>
      {children}
    </ProductosContext.Provider>
  );
};
