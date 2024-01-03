import { Menu } from '@headlessui/react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useRouter } from 'next/router';
import logo from '../public/logo.png';
import DropdownLink from './DropdownLink';
import SearchBar from './SearchBar';


const MainNav = () => {

  const router = useRouter()

  const { status, data: session } = useSession();
 

  const logoutClickHandler = () => {

    signOut({ callbackUrl: '/login' });
  };

  const applicationHandler = () => {
    router.push("/application")
  }
  return (
    <header className="container mx-auto sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-md py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={'/bid-shop'}>
                  <a className="font-semibold">Job Offer</a>
                </Link>
              </li>

              <li>
                <Link href={'/what-bids'}>
                  <a className="font-semibold">Permission</a>
                </Link>
              </li>

            </ul>
          </div>

          <div>
          <Link href={'/'} className="btn btn-ghost normal-case text-xl">
            <a className=" normal-case text-xl hidden lg:block ">
              <Image src={logo} alt="logo" width={150} height={75} />
            </a>
          </Link>
          <Link href={'/'} className="btn btn-ghost normal-case text-xl">
            <a className=" block md:hidden">
              <Image src={logo} alt="logo" width={50} height={25} />
            </a>
          </Link>
          </div>

          <div className=' ml-10 lg:block'>
            <Link href={'/job-offer'}>
              <a className="font-semibold uppercase btn btn-success">Job Offer</a>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <h3 className='text-2xl font-extrabold uppercase'><span className='text-red-500'>Canada Immigration</span> <span>Visa Office</span></h3>
        </div>
        
        <div className="navbar-end">
          <div className="flex md:gap-5 lg:gap-10 items-center">
           <div className=' hidden lg:block'>
           <SearchBar></SearchBar>
           </div>
            {status === 'loading' ? (
              'Loading'
            ) : session?.user ? (
              <Menu as="div" className="relative inline-block z-100">
                <Menu.Button className="flex items-center gap-4 text-white px-8 py-3 rounded-lg font-bold">

                  <h2 className=" hidden md:block text-primary uppercase">
                    {session?.user?.name}
                  </h2>
                </Menu.Button>
                <Menu.Items className="absolute w-56 origin-top-right bg-white  shadow-lg pl-5">
                  {session.user.isAdmin ? (
                    <>

                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/my-account"
                        >
                          My Account
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/orders"
                        >
                          Order History
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/my-account"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    </>
                  ) : (
                    <>
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link bg-slate-300"
                          href="/application"
                        >
                          Apply for Visa
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/users/my-account"
                        >
                          My Account
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/users/order-history"
                        >
                          Order History
                        </DropdownLink>
                      </Menu.Item>

                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/users/payment"
                        >
                          Payment
                        </DropdownLink>
                      </Menu.Item>
                    </>
                  )}
                  <Menu.Item>
                    <a
                      className="dropdown-link"
                      href="#"
                      onClick={logoutClickHandler}
                    >
                      Logout
                    </a>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) :
              (
                <button className="btn btn-primary" onClick={applicationHandler} >Application</button>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
