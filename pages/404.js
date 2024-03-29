import Link from 'next/link';
import React from 'react';  

const NotFind = () => {
  return (
    <section className="flex items-center h-full p-16 dark:dark:bg-gray-900 dark:dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we could not find this page.
          </p>
          <p className="mt-4 mb-8 dark:dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <a
              rel="noOpener noReferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900"
            >
              Back to homepage
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFind;
