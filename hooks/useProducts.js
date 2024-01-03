import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admin/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return products;
};

export default useProducts;
