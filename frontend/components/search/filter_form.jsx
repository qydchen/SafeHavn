import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ minHousing, maxHousing, updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
      <br/>
      <label>Minimum Guests</label>
      <input
        type="number"
        value={minHousing}
        onChange={handleChange('minHousing', updateFilter)}
      />
     <br/>
    <label>Maximum Guests</label>
    <input
      type="number"
      value={maxHousing}
      onChange={handleChange('maxHousing', updateFilter)}
    />
  </div>
);

export default FilterForm;
