import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';

const ProductNav = () => {
  return (
    <div className="navbar-center">
      <ul className="menu menu-horizontal lg:px-1">
        <li>
          <SearchBar></SearchBar>
        </li>
        <li>
          <Link href={'/?sort=endingSoon'}>
            <a className="text-md">Ending soon</a>
          </Link>
        </li>

        <li>
          <Link href={'/?sort=newest'}>
            <a className="text-md">Newly listed</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductNav;
