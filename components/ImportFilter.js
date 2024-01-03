import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileImport,
  faFilter,
  faCloudArrowDown,
} from '@fortawesome/free-solid-svg-icons';

const ImportFilter = () => {
  return (
    <div className="flex gap-5 py-10">
      <button className="btn bg-white flex gap-2">
        <FontAwesomeIcon icon={faFileImport} />
        <span>Import</span>
      </button>
      <button className="btn bg-white flex gap-2">
        <FontAwesomeIcon icon={faFilter} />
        <span>Filter</span>
      </button>
      <button className="btn btn-secondary flex gap-2">
        <FontAwesomeIcon icon={faCloudArrowDown} />
        <span>Download</span>
      </button>
    </div>
  );
};

export default ImportFilter;
