import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendUp,
  faEllipsisVertical,
  faArrowTrendDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Layout from '../../components/Layout';
import UsersNav from '../../components/Dashboard/UsersNav';

const Analytics = () => {
  const data = [
    {
      name: 'January',
      uv: 350,
      pv: 250,
      amt: 500,
    },
    {
      name: 'February',
      uv: 450,
      pv: 350,
      amt: 700,
    },
    {
      name: 'March',
      uv: 500,
      pv: 350,
      amt: 1000,
    },
    {
      name: 'April',
      uv: 550,
      pv: 450,
      amt: 650,
    },
    {
      name: 'May',
      uv: 600,
      pv: 500,
      amt: 700,
    },
    {
      name: 'Jun',
      uv: 505,
      pv: 350,
      amt: 750,
    },
    {
      name: 'July',
      uv: 400,
      pv: 385,
      amt: 800,
    },
    {
      name: 'August',
      uv: 650,
      pv: 500,
      amt: 900,
    },
    {
      name: 'September',
      uv: 700,
      pv: 500,
      amt: 950,
    },
    {
      name: 'October',
      uv: 800,
      pv: 700,
      amt: 1000,
    },
    {
      name: 'November',
      uv: 950,
      pv: 700,
      amt: 1100,
    },
    {
      name: 'December',
      uv: 1000,
      pv: 600,
      amt: 1200,
    },
  ];
  return (
    <Layout title="Analytics">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <UsersNav></UsersNav>
        <div className="overflow-x-auto xl:col-span-5 md:col-span-2">
          <div>
            <div className="flex gap-5 py-10">
              <div className="card bg-base-100 shadow-xl">
                <div className="flex">
                  <div className="card-body items-center text-center">
                    <h2 className="">Total sells</h2>
                    <p className="font-bold	text-2xl">$3799.00</p>
                  </div>
                  <div className="card-body  text-center">
                    <div className="flex flex-col justify-center items-end">
                      <span>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </span>
                      <h2 className="card-title text-green-500">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> 36.7%
                      </h2>
                      <p>
                        <small>Compared to November 22</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="flex">
                  <div className="card-body items-center text-center">
                    <h2 className="">Average order value</h2>
                    <p className="font-bold	text-2xl">$99.00</p>
                  </div>
                  <div className="card-body  text-center">
                    <div className="flex flex-col justify-center items-end">
                      <span>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </span>
                      <h2 className="card-title text-red-500">
                        <FontAwesomeIcon icon={faArrowTrendDown} /> 7.7%
                      </h2>
                      <p>
                        <small>Compared to November 22</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="flex">
                  <div className="card-body items-center text-center">
                    <h2 className="">Total orders</h2>
                    <p className="font-bold	text-2xl">512</p>
                  </div>
                  <div className="card-body  text-center">
                    <div className="flex flex-col justify-center items-end">
                      <span>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </span>
                      <h2 className="card-title text-green-500">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> 34.7%
                      </h2>
                      <p>
                        <small>Compared to November 22</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex my-20 justify-evenly">
              <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body items-center text-center">
                    <h2 className="font-bold">Active users</h2>
                    <p className="font-bold text text-green-500 text-xl">750</p>
                    <div>
                      <div className="overflow-x-auto">
                        <table className="table w-full">
                          <thead>
                            <tr>
                              <th>Active Page</th>
                              <th>Users</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>/products/brandix-z4</td>
                              <td>114</td>
                            </tr>

                            <tr>
                              <td>/HartHagerty</td>
                              <td>58</td>
                            </tr>

                            <tr>
                              <td>/BriceSwyre</td>
                              <td>18</td>
                            </tr>
                            <tr>
                              <td>/BriceSwyre/contact</td>
                              <td>11</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-xl p-5">
                <h2 className="font-bold py-10">Income statistics</h2>
                <BarChart width={730} height={250} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis dataKey="amt" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
Analytics.auth = { adminOnly: false };
export default Analytics;
