import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../utils/Store';
import ProductItem from './ProductItem';
import db from '../utils/db';
import Product from '../models/Product';

const ProductsGrid = ({ products }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.slug}
          addToCartHandler={addToCartHandler}
        ></ProductItem>
      ))}
    </div>
  );
};
export default ProductsGrid;

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
