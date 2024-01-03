import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import MainNav from './MainNav';
import SearchBar from './SearchBar';

export default function Layout({ title, children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between ">
        <Head>
          <title>{title ? title + ' | CIVO' : 'CANADA IMMIGRATION VISA OFFICE'}</title>
          <meta name="description" content="CANADA IMMIGRATION VISA OFFICE" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <ToastContainer position="top-center" limit={1} />
        <MainNav></MainNav>
        <div className='lg:hidden my-4 flex justify-center items-center'>
           <SearchBar></SearchBar>
           </div>
        <main className="container min-h-screen m-auto mt-4 px-4">
          {children}
        </main>
        <footer className=" items-center shadow-inner">
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}
