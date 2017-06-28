import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

export const PricingForm = ({ minPrice, maxPrice, updateFilter }) => (
  <div className="filter-col">
    <label>Min. Price ($):</label>
    <input className="filter-container"
      type="number"
      value={minPrice ? minPrice : 0}
      onChange={handleChange('minPrice', updateFilter)}
    />
    <label>Max. Price ($):</label>
    <input className="filter-container"
      type="number"
      value={maxPrice ? maxPrice : 0}
      onChange={handleChange('maxPrice', updateFilter)}
    />
  </div>
);

export const HousingForm = ({ minHousing, maxHousing, updateFilter }) => (
  <div className="filter-col">
    <label>Min. Guests:</label>
    <input className="filter-container"
      type="number"
      value={minHousing ? minHousing : 1}
      onChange={handleChange('minHousing', updateFilter)}
    />
    <label>Max. Guests:</label>
    <input className="filter-container"
      type="number"
      value={maxHousing ? maxHousing : 12}
      onChange={handleChange('maxHousing', updateFilter)}
    />
  </div>
);
