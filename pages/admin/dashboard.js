import axios from 'axios';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useReducer } from 'react';
import AdminLayout from '../../components/AdminLayout';
import AdminNavBar from '../../components/Dashboard/AdminNavBar';
import AdminTopNav from '../../components/Dashboard/AdminTopNav';
import ImportFilter from '../../components/ImportFilter';
import Loading from '../../components/Shared/Loading';
import { getError } from '../../utils/error';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}
function AdminDashboardScreen() {
  const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/summary`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: summary?.salesData.map((x) => x._id), // 2022/01 2022/03
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(162, 222, 208, 1)',
        data: summary.salesData.map((x) => x.totalSales),
      },
    ],
  };
  return (
    <AdminLayout title="Admin Dashboard">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNavBar></AdminNavBar>
        <div className="xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>
          <div className="flex items-center justify-between">
            <h1 className="my-4 text-xl font-semibold text-secondary">
              Admin Dashboard
            </h1>
            <ImportFilter></ImportFilter>
          </div>
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="card  p-5 bg-white">
                  <h2 className="font-bold">TOTAL REVENUE</h2>
                  <p className="text-sm">Previous month vs this months</p>
                  <p className="text-3xl font-bold">${summary.ordersPrice} </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      <span className="text-secondary">55% </span> Higher
                    </p>
                    <Link href="/admin/orders">
                      <a className="btn btn-xs">View sales</a>
                    </Link>
                  </div>
                </div>

                <div className="card p-5 bg-white">
                  <h2 className="font-bold uppercase">TOTAL products</h2>
                  <p className="text-sm">Previous month vs this months</p>
                  <p className="text-3xl font-bold">{summary.productsCount} </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      <span className="text-primary">15% </span> Decrease
                    </p>
                    <Link href="/admin/orders">
                      <a className="btn btn-xs">View products</a>
                    </Link>
                  </div>
                </div>
                <div className="card p-5 bg-white">
                  <h2 className="font-bold uppercase">TOTAL users</h2>
                  <p className="text-sm">Previous month vs this months</p>
                  <p className="text-3xl font-bold">{summary.usersCount} </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      <span className="text-secondary">85% </span> Higher
                    </p>
                    <Link href="/admin/users">
                      <a className="btn btn-xs">View users</a>
                    </Link>
                  </div>
                </div>
              </div>
              <h2 className="text-xl py-2 text-secondary font-bold">
                Sales Report
              </h2>
              <Bar
                className="bg-white px-10"
                options={{
                  legend: { display: true, position: 'right' },
                }}
                data={data}
              />
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

AdminDashboardScreen.auth = { adminOnly: true };
export default AdminDashboardScreen;
