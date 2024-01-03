import {
  faCartFlatbedSuitcase,
  faCartShopping,
  faChartLine,
  faCommentDots,
  faGaugeHigh,
  faGear,
  faMessage,
  faRightFromBracket,
  faTicket,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const AdminNavBar = () => {
  return (
    <div>
      <div className="bg-black h-screen">
        <div className="lg:px-4 pt-4">
        
        </div>

        <ul className=" menu p-4 text-base-content">
          <li>
            <Link href="/admin/my-account">
              <a className="text-xl font-bold text-green-200 hover:text-white">
                <h2 className="">
                  <FontAwesomeIcon icon={faTicket} /> Admin Panel
                </h2>
              </a>
            </Link>
          </li>
         
          <li>
            <Link href="/admin/my-account">
              <a className="font-semibold text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faGaugeHigh} />
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/users">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faUserTie} /> Users
              </a>
            </Link>
          </li>

          <li>
            <Link href="/admin/orders">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faCartShopping} /> Orders
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/applications">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faCartFlatbedSuitcase} /> All Application
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/customers">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faCartFlatbedSuitcase} /> All Customer Info
              </a>
            </Link>
          </li>
          
          <li>
            <Link href="/admin/add-customer-info">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faCartFlatbedSuitcase} /> Add Customer Info
              </a>
            </Link>
          </li>
          
          

          

          
          

          <li>
            <Link href="/admin/inbox">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faMessage} /> Inbox
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/chat">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faCommentDots} /> Chat
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/analytics">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faChartLine} /> Analytics
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/settings">
              <a className=" font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faGear} /> Settings
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/Logout">
              <a className="font-medium text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faRightFromBracket} /> Logout
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavBar;
