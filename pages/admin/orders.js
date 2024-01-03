import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import AdminLayout from '../../components/AdminLayout';
import AdminTopNav from '../../components/Dashboard/AdminTopNav';
import ImportFilter from '../../components/ImportFilter';
import Loading from '../../components/Shared/Loading';
import { getError } from '../../utils/error';
import AdminNavBar from '../../components/Dashboard/AdminNavBar';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

export default function AdminOrderScreen() {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/orders`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNavBar></AdminNavBar>
        <div className="overflow-x-auto xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 my-4 text-md font-bold uppercase">
              <h3>Total Orders:</h3>
              <span className="text-secondary  text-xl font-bold">
                {orders.length}
              </span>
            </div>
            <ImportFilter></ImportFilter>
          </div>

          {loading ? (
            <div>
              <Loading></Loading>
            </div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto ">
              <table className="min-w-full bg-white">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">ID</th>
                    <th className="p-5 text-left">USER</th>
                    <th className="p-5 text-left">DATE</th>
                    <th className="p-5 text-left">TOTAL</th>
                    <th className="p-5 text-left">PAID</th>
                    <th className="p-5 text-left">DELIVERED</th>
                    <th className="p-5 text-left">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id} className="border-b">
                      <td className="p-5">{order._id.substring(20, 24)}</td>
                      <td className="p-5">
                        {order.user ? order.user.name : 'DELETED USER'}
                      </td>
                      <td className="p-5">
                        {order.createdAt.substring(0, 10)}
                      </td>
                      <td className="p-5">${order.totalPrice}</td>
                      <td className="p-5">
                        {order.isPaid
                          ? `${order.paidAt.substring(0, 10)}`
                          : 'not paid'}
                      </td>
                      <td className="p-5">
                        {order.isDelivered
                          ? `${order.deliveredAt.substring(0, 10)}`
                          : 'not delivered'}
                      </td>
                      <td className="p-5">
                        <Link href={`/order/${order._id}`} passHref>
                          <a>Details</a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

AdminOrderScreen.auth = { adminOnly: true };
