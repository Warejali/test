import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import AdminLayout from '../../components/AdminLayout';
import AdminNave from '../../components/Dashboard/AdminNavBar';
import AdminTopNav from '../../components/Dashboard/AdminTopNav';
import ImportFilter from '../../components/ImportFilter';
import Loading from '../../components/Shared/Loading';
import { getError } from '../../utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, customers: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };

    default:
      state;
  }
}
export default function CustomerScreen() {

  const [
    { loading, error, customers, successDelete, loadingDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    customers: [],
    error: '',
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/customer`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const deleteHandler = async (productId) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/customer/${productId}`);
      dispatch({ type: 'DELETE_SUCCESS' });
      toast.success('Product deleted successfully');
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      toast.error(getError(err));
    }
  };
  return (
    <AdminLayout title="Admin Products">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNave></AdminNave>
        <div className="overflow-x-auto xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 my-4 text-md font-bold uppercase">
              <h3>Total Applications:</h3>
              <span className="text-secondary  text-xl font-bold">
                {customers.length}
              </span>
            </div>
            {loadingDelete && <div>Deleting item...</div>}

            <ImportFilter></ImportFilter>
          </div>

          {loading ? (
            <div>
              <Loading></Loading>
            </div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (


            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {customers.map((customer) => (
                <>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">

                      <div className=''>
                        <p><span className=' font-medium'>Passport No:</span> {customer.passport}</p>
                        <Image
                          className=" w-fit h-auto"
                          src={customer.image}
                          alt="image"
                          width={300}
                          height={300}
                          layout="responsive"
                        />
                      </div>

                      <div className='flex justify-between'>
                        <div>
                          <Link href={`/admin/application/${customer._id}`}>
                            <a type="button" className="default-button">
                              Edit
                            </a>
                          </Link>
                        </div>
                        <div>
                          <button
                            onClick={() => deleteHandler(customer._id)}
                            className="default-button"
                            type="button"
                          >
                            Delete
                          </button>
                        </div>
                        {/* <div>
                          <Link href={`/application/${customer._id}`}>
                            <a className="">
                              <h2 className="font-semibold">View Details</h2>
                            </a>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

CustomerScreen.auth = { adminOnly: true };
