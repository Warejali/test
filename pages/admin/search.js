import { XCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../components/AdminLayout';
import AdminNavBar from '../../components/Dashboard/AdminNavBar';
import AdminTopNav from '../../components/Dashboard/AdminTopNav';
import Application from '../../models/application';
import db from '../../utils/db';


const PAGE_SIZE = 12;

const prices = [
  {
    name: '$1 to $50',
    value: '1-50',
  },
  {
    name: '$51 to $200',
    value: '51-200',
  },
  {
    name: '$201 to $1000',
    value: '201-1000',
  },
];

const ratings = [1, 2, 3, 4, 5];

export default function Search(props) {
  const router = useRouter();

  const {
    query = 'all',
    category = 'all',
    passport = 'all',
    price = 'all',
    rating = 'all',
    sort = 'featured',
    page = 1,
  } = router.query;

  const { applications, categories, pages } = props;

  const filterSearch = ({
    page,
    category,
    passport,
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
    if (passport) query.passport = passport;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };
  const pageHandler = (page) => {
    filterSearch({ page });
  };
  // const brandHandler = (e) => {
  //   filterSearch({ passport: e.target.value });
  // };
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };
  const priceHandler = (e) => {
    filterSearch({ price: e.target.value });
  };
  const ratingHandler = (e) => {
    filterSearch({ rating: e.target.value });
  };

  
  return (

    <AdminLayout title="Profile">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNavBar></AdminNavBar>
        <div className="xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>
          <div className="flex items-center justify-between">
         
      <div className="mt-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-6">
            <div className="">
              <select
                className="w-full"
                value={category}
                onChange={categoryHandler}
              >
                <option value="all">Category</option>
                {categories &&
                  categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>
            {/* <div className="">
            <select className="w-full" value={passport} onChange={brandHandler}>
              <option value="all">Brand</option>
              {passports &&
                passports.map((passport) => (
                  <option key={passport} value={passport}>
                    {passport}
                  </option>
                ))}
            </select>
          </div> */}
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
            <div className="">
              <select
                className="w-full"
                value={rating}
                onChange={ratingHandler}
              >
                <option value="all">Rating</option>
                {ratings &&
                  ratings.map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} star{rating > 1 && 's'} & up
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <select value={sort} onChange={sortHandler}>
                <option value="featured">Sort by</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="toprated">Customer Reviews</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li onClick={sortHandler}>
                <Link href={'/'}>
                  <a className="text-md">Ending soon</a>
                </Link>
                <Link href={'/'}>
                  <a className="text-md">Newly listed</a>
                </Link>
                <Link href={'/'}>
                  <a className="text-md">No RSeserve</a>
                </Link>
                <Link href={'/'}>
                  <a className="text-md">Closest to me</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="mb-2 flex items-center justify-between border-b-2 pb-2">
            <div className="flex items-center">
              {/* {products.length === 0 ? 'No' : countProducts} Results */}
              {query !== 'all' && query !== '' && ' : ' + query}
              {category !== 'all' && ' : ' + category}
              {passport !== 'all' && ' : ' + passport}
              {price !== 'all' && ' : Price ' + price}
              {rating !== 'all' && ' : Rating ' + rating + ' & up'}
              &nbsp;
              {(query !== 'all' && query !== '') ||
              category !== 'all' ||
              passport !== 'all' ||
              rating !== 'all' ||
              price !== 'all' ? (
                <button onClick={() => router.push('/search')}>
                  <XCircleIcon className="h-5 w-5" />
                </button>
              ) : null}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4  ">
              {applications.map((application) => (
                <>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Name: {application.name}</h2>
                    <p><span className=' font-medium'>Passport No:</span> {application.passport}</p>

                    <div className='flex justify-between'>
                     
                     
                      <div>
                        <Link href={`/application/${application._id}`}>
                          <a className="">
                            <h2 className="font-semibold">View Details</h2>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              ))}
            </div>
            <ul className="flex">
              {applications.length > 0 &&
                [...Array(pages).keys()].map((pageNumber) => (
                  <li key={pageNumber}>
                    <button
                      className={`default-button m-2 ${
                        page == pageNumber + 1 ? 'font-bold' : ''
                      } `}
                      onClick={() => pageHandler(pageNumber + 1)}
                    >
                      {pageNumber + 1}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    
          </div>
        </div>
      </div>
    </AdminLayout>
    
  );
}

export async function getServerSideProps({ query }) {
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const category = query.category || '';
  const passport = query.passport || '';
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
  const passportFilter = passport && passport !== 'all' ? { passport } : {};
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
      : { _id: -1 };

  await db.connect();
  const categories = await Application.find().distinct('category');
  const passports = await Application.find().distinct('passport');
  const productDocs = await Application.find(
    {
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...passportFilter,
      ...ratingFilter,
    },
    '-reviews'
  )
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean();

  const countProducts = await Application.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...passportFilter,
    ...ratingFilter,
  });

  await db.disconnect();
  const applications = productDocs.map(db.convertDocToObj);

  return {
    props: {
      applications,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
      categories,
      passports,
    },
  };
}
