import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

const AdminLayout = ({ title, children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-neutral">
        <Head>
          <title>{title ? title + ' - BestDealBids' : 'BestDealBids'}</title>
          <meta name="description" content="Auctions multivendor Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ToastContainer position="bottom-center" limit={1} />
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022</p>
        </footer>
      </div>
    </>
  );
};

export default AdminLayout;
