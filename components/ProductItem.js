/* eslint-disable @next/next/no-img-element */
import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import Image from 'next/image';
import { toast } from 'react-toastify';
import { Store } from '../utils/Store';
import CountdownTime from './CountdownTime';
import Layout from './Layout';


export default function ProductItem({ product }) {
  const { file } = product;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a className="relative">
          {file.slice(0, 1).map((image) => (
            <>
              <Image
                className=" w-fit h-auto"
                src={image.fileUrl}
                alt={image.name}
                width={300}
                height={300}
                layout="responsive"
              />
            </>
          ))}
          <div className="lg:flex gap-4 rounded-lg absolute py-2 bottom-2 left-5 bg-black text-white text-sm text-center ">
            <div className="flex px-2 gap-2 items-center text-white">
              <FontAwesomeIcon
                className="text-gray-300 font-bold"
                icon={faClock}
              />
              <CountdownTime product={product}></CountdownTime>
            </div>
            <h2 className="px-4">
              <span className="text-gray-300">
                
              </span>
            </h2>
          </div>
        </a>
      </Link>
      <div className="flex flex-col p-5">
        <div className="flex justify-between">
          <Link href={`/product/${product.slug}`}>
            <a className="">
              <h2 className="text-lg font-semibold">
                {product.name.substring(0, 30)}
              </h2>
            </a>
          </Link>

          <a>
            <FontAwesomeIcon
              onClick={() => addToCartHandler(product)}
              className="font-bold text-primary cursor-pointer"
              icon={faHeart}
            />
          </a>
        </div>
        <p className="mb-2">
          {product.shortDescription.substring(0, 70) + '...'}
        </p>
        <div className="flex justify-between">
          <p className="text-xs">{product.location}</p>
        </div>
      </div>
    </div>
  );
}
