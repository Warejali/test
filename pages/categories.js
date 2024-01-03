import React from 'react';
import Layout from '../components/Layout';
import Product from '../models/Product';
import db from '../utils/db';

export default function Search(props) {
  const { categories } = props;

  return (
    <Layout title="categories">
      <div className="mt-10">
        <div className="flex justify-between">
          {categories.length}
          <div className="flex items-center gap-6">
            <div className="">
              <select className="w-full">
                <option value="all">Category</option>
                {categories &&
                  categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const categories = await Product.find().distinct('category');
  await db.disconnect();

  return {
    props: {
      categories,
    },
  };
}
