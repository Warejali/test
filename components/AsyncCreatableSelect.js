import React, { useState } from 'react';

import CreatableSelect from 'react-select/creatable';

export const Creatable = ({ allOptions }) => {
  const defaultOptions = [];
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState();
  const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  });

  allOptions.map((label) => {
    defaultOptions.push({ label, value: label });
  });

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 1000);
  };
  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => setValue(newValue)}
      onCreateOption={handleCreate}
      options={options}
      value={value}
      isMulti={true}
    />
  );
};
