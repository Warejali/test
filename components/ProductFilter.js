import React from 'react';

const ProductFilter = () => {
  return (
    <div className="flex gap-2 items-center py-5">
      <div>
        <h2 className="text-2xl font-semibold">Auctions</h2>
      </div>
      <div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Years
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Transmission
          </option>
          <option>All</option>
          <option>Manual</option>
          <option>Automatic</option>
        </select>
      </div>
      <div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Body Style
          </option>
          <option>All</option>
          <option>Coupe</option>
          <option>Convertible</option>
          <option>Hatchback</option>
          <option>Sedan</option>
          <option>SUV/Crossover</option>
          <option>Truck</option>
          <option>Van/Minivan</option>
          <option>Wagon</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
