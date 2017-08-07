import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const priceOptions = [];
for (let i = 1; i <= 20; i++) {
  priceOptions.push(
    <option value={i * 50}
    key={i}
    >{"$" + i * 50}</option>
  )
};

const guestOptions = [];
for (let i = 1; i <= 12; i++) {
  guestOptions.push(
    <option value={i}
    key={i}
    >{i}</option>
  )
};

export const PricingForm = ({ minPrice, maxPrice, updateFilter }) => (
  <div className="filter-col">
    <label>Min. Price:</label>
    <div className='select-dd-container filter-dd-cont'>
      <select className='select-dropdown filter-dd' value={minPrice ? minPrice : 0}
        onChange={handleChange('minPrice', updateFilter)}
      >{priceOptions}</select>
      <span className="dropdown-arrow"></span>
    </div>
    <label>Max. Price:</label>
    <div className='select-dd-container filter-dd-cont'>
      <select className='select-dropdown filter-dd' value={maxPrice ? maxPrice : 500}
        onChange={handleChange('maxPrice', updateFilter)}
      >{priceOptions}</select>
      <span className="dropdown-arrow"></span>
    </div>
  </div>
);

export const HousingForm = ({ minHousing, maxHousing, updateFilter }) => (
  <div className="filter-col">
    <label>Min. Guests:</label>
    <div className='select-dd-container filter-dd-cont'>
      <select className='select-dropdown filter-dd' value={minHousing ? minHousing : 0}
        onChange={handleChange('minHousing', updateFilter)}
      >{guestOptions}</select>
      <span className="dropdown-arrow"></span>
    </div>
    <label>Max. Guests:</label>
    <div className='select-dd-container filter-dd-cont'>
      <select className='select-dropdown filter-dd' value={maxHousing ? maxHousing : 12}
        onChange={handleChange('maxHousing', updateFilter)}
      >{guestOptions}</select>
      <span className="dropdown-arrow"></span>
    </div>
  </div>
);
