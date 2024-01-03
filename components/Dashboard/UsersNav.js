import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

import {
  faBagShopping,
  faBell,
  faGavel,
  faGear,
  faMoneyCheck,
  faRightFromBracket,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

const UsersNav = () => {
  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <div>
      <div className="bg-blue-900 h-screen">
        <ul className=" menu p-4 text-base-content">
          <li>
            <Link href={`/users/my-account`}>
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faUserTie} /> My Account
              </a>
            </Link>
          </li>

          <li>
            <Link href="/users/notifications">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faBell} /> Notifications
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users/order-history">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faBagShopping} /> Order History
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users/bids">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faGavel} /> My Informations
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users/payment">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faMoneyCheck} /> Payment
              </a>
            </Link>
          </li>

          <li>
            <Link href="/users/profile">
              <a className=" font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faGear} /> Settings
              </a>
            </Link>
          </li>
          <li>
            <a
              onClick={logoutClickHandler}
              className="font-medium text-slate-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faRightFromBracket} /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UsersNav;
