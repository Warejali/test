import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (query) {
      
      router.push(`/search?passport=${query}`);
    }
    else {
      router.push("/");
    }
  };

  return (
    <form onSubmit={submitHandler} className="mx-auto flex items-center">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="rounded-l p-2 border border-r-0 focus:outline-none"
        placeholder="Enter Passport Number"
      />
      <button
        type="submit"
        className="rounded-r bg-primary text-white p-2"
        id="button-addon2"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
