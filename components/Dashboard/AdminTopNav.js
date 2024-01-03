import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useUserById from '../../hooks/useUserById';
import DropdownLink from '../DropdownLink';
import SearchBarAdmin from '../SearchBarAdmin';

const AdminTopNav = () => {
  const { data: session } = useSession();
  const user = useUserById();
  const file = user?.file;

  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/login' });
  };


  

  return (
    <div>
      <div className="navbar bg-white shadow">
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
          </div>
          <Link href="/">
            <a className="text-white btn btn-secondary text-md uppercase font-bold">
              Visit Page
            </a>
          </Link>
          <SearchBarAdmin></SearchBarAdmin>
        </div>

        <div className="navbar-end hidden lg:flex gap-10">
          <div className="flex gap-10">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary opacity-80">
                99+
              </span>
              <FontAwesomeIcon className="mt-2" icon={faMessage} />
            </div>
            <div className="indicator">
              <span className="indicator-item badge badge-primary opacity-70">
                9
              </span>
              <FontAwesomeIcon className="mt-2" icon={faBell} />
            </div>
          </div>
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="flex items-center gap-4 text-white px-8 py-3 rounded-lg font-bold">
              <h2>{session?.user?.name}</h2>

              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {file?.map((image) => (
                    <>
                      <Image
                        className=" w-fit h-auto"
                        src={image.fileUrl}
                        alt={image.name}
                        width={100}
                        height={100}
                        layout="responsive"
                      />
                    </>
                  ))}
                </div>
              </div>
            </Menu.Button>
            <Menu.Items className="absolute w-56 origin-top-right bg-white  shadow-lg pl-5 z-50">
              {session?.user?.isAdmin ? (
                <>
                  <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="/application"
                    >
            Application
                    </DropdownLink>
                  </Menu.Item>
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
                      href="/users/my-account"
                    >
                      The Bids Shop
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
        </div>
      </div>
    </div>
  );
};

export default AdminTopNav;
