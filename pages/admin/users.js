import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
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
      return { ...state, loading: false, users: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    case 'UPDATE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'UPDATE_FAIL':
      return { ...state, loadingDelete: false };
    case 'UPDATE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
}

function AdminUsersScreen() {
  const [{ loading, error, users, successDelete, loadingDelete }, dispatch] =
    useReducer(reducer, {
      loading: true,
      users: [],
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/users`);
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

  const deleteHandler = async (userId) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/users/${userId}`);
      dispatch({ type: 'DELETE_SUCCESS' });
      toast.success('User deleted successfully');
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      toast.error(getError(err));
    }
  };

  return (
    <AdminLayout title="Users">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNavBar></AdminNavBar>
        <div className="overflow-x-auto xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 my-4 text-md font-bold uppercase">
              <h3>Total users:</h3>
              <span className="text-secondary  text-xl font-bold">
                {users.length}
              </span>
            </div>
            <ImportFilter></ImportFilter>
          </div>
          {loadingDelete && <div>Deleting...</div>}
          {loading ? (
            <div>
              <Loading></Loading>
            </div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto bg-white">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">ID</th>
                    <th className="p-5 text-left">NAME</th>
                    <th className="p-5 text-left">EMAIL</th>
                    <th className="p-5 text-left">ROLE</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} className="border-b">
                      <td className=" p-5 ">{user._id.substring(20, 24)}</td>
                      <td className=" p-5 ">{user.name}</td>
                      <td className=" p-5 ">{user.email}</td>

                      <td className=" p-5 ">
                        {user.isAdmin
                          ? 'Admin'
                          : user.isVendor
                          ? 'Vendor'
                          : 'NO'}
                      </td>
                      <td className=" p-5 ">
                        <Link href={`/admin/user/${user._id}`} passHref>
                          <a type="button" className="default-button">
                            Edit
                          </a>
                        </Link>
                        &nbsp;
                        <button
                          type="button"
                          className="default-button"
                          onClick={() => deleteHandler(user._id)}
                        >
                          Delete
                        </button>
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

AdminUsersScreen.auth = { adminOnly: true };
export default AdminUsersScreen;
