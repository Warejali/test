import { XCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import CarouselComponent from '../components/CarouselComponent';
import Info from '../components/Info';
import Layout from '../components/Layout';
import ProductNav from '../components/ProductNav';
import Product from '../models/Product';
import db from '../utils/db';

const PAGE_SIZE = 12;

const prices = [
  {
    name: '$0 to $50',
    value: '0-50',
  },
  {
    name: '$51 to $100',
    value: '51-100',
  },
  {
    name: '$101 to $300',
    value: '101-300',
  },
  {
    name: '$300 to $500',
    value: '300-500',
  },
  {
    name: '$500+',
    value: '500-300000000000000',
  },
];

// const ratings = [1, 2, 3, 4, 5];

export default function Search() {
  const router = useRouter();

  const {
    query = 'all',
    category = 'all',
    brand = 'all',
    price = 'all',
    rating = 'all',
    sort = 'featured',
    
  } = router.query;

  

  const filterSearch = ({
    page,
    category,
    brand,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating,
  }) => {
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  
 
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };
  const priceHandler = (e) => {
    filterSearch({ price: e.target.value });
  };
  // const ratingHandler = (e) => {
  //   filterSearch({ rating: e.target.value });
  // };

  

  return (
    <Layout title="Home">
       
      <CarouselComponent></CarouselComponent>
      <div className="mt-10">
        <div className="lg:flex justify-between">
          <div className="grid grid-cols-3 gap-2">
            <div className="">
             
            </div>
            <div className="">
              <select className="w-full" value={price} onChange={priceHandler}>
                <option value="all">Price</option>
                {prices &&
                  prices.map((price) => (
                    <option key={price.value} value={price.value}>
                      {price.name}
                    </option>
                  ))}
              </select>
            </div>
        
            <div>
              <select className="w-full" value={sort} onChange={sortHandler}>
                <option value="featured">Sort by</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="toprated">Customer Reviews</option>
                <option value="newest">Newest Arrivals</option>
                <option value="endingSoon">Ending soon</option>
                <option value="noReserve">No Reserve</option>
              </select>
            </div>
          </div>

          <ProductNav></ProductNav>
        </div>
        <div className="md:col-span-4">
          <div className="mb-2 flex items-center justify-between border-b-2 pb-2">
            <div className="flex items-center">
              {/* {products.length === 0 ? 'No' : countProducts} Results */}
              {query !== 'all' && query !== '' && ' : ' + query}
              {category !== 'all' && ' : ' + category}
              {brand !== 'all' && ' : ' + brand}
              {price !== 'all' && ' : Price ' + price}
              {rating !== 'all' && ' : Rating ' + rating + ' & up'}
              &nbsp;
              {(query !== 'all' && query !== '') ||
              category !== 'all' ||
              brand !== 'all' ||
              rating !== 'all' ||
              price !== 'all' ? (
                <button onClick={() => router.push('/search')}>
                  <XCircleIcon className="h-5 w-5" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="my-20">
          <Info/>
          
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const category = query.category || '';
  const brand = query.brand || '';
  const price = query.price || '';
  const rating = query.rating || '';
  const sort = query.sort || '';
  const searchQuery = query.query || '';

  const queryFilter =
    searchQuery && searchQuery !== 'all'
      ? {
          name: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {};
  const categoryFilter = category && category !== 'all' ? { category } : {};
  const brandFilter = brand && brand !== 'all' ? { brand } : {};
  const ratingFilter =
    rating && rating !== 'all'
      ? {
          rating: {
            $gte: Number(rating),
          },
        }
      : {};
  // 10-50
  const priceFilter =
    price && price !== 'all'
      ? {
          price: {
            $gte: Number(price.split('-')[0]),
            $lte: Number(price.split('-')[1]),
          },
        }
      : {};
  const order =
    sort === 'featured'
      ? { isFeatured: -1 }
      : sort === 'lowest'
      ? { price: 1 }
      : sort === 'highest'
      ? { price: -1 }
      : sort === 'toprated'
      ? { rating: -1 }
      : sort === 'newest'
      ? { createdAt: -1 }
      : sort === 'endingSoon'
      ? { endDate: 1 }
      : sort === 'noReserve'
      ? { reserve: 1 }
      : { _id: -1 };

  await db.connect();
  const categories = await Product.find().distinct('category');
  const brands = await Product.find().distinct('brand');
  // const UserProduct= await Product.find({email:session.user.email})
  const productDocs = await Product.find(
    {
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...brandFilter,
      ...ratingFilter,
    },
    '-reviews'
  )
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean();

  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...brandFilter,
    ...ratingFilter,
  });

  await db.disconnect();
  const products = productDocs.map(db.convertDocToObj);

  return {
    props: {
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
      categories,
      brands,
    },
  };
}
