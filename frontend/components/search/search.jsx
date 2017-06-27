import React from 'react';
import HomeMap from '../home_map/home_map';
import HomeIndex from '../home_index/home_index';
import FilterForm from './filter_form';

const Search = ({homes, updateFilter, minHousing, maxHousing}) => {
  return (
    <section className='index-container'>
      <div className="filter-form">
        <FilterForm
        minHousing={minHousing}
        maxHousing={maxHousing}
        updateFilter={updateFilter}
        />
        <HomeIndex homes={homes} />
      </div>

      <HomeMap homes={homes} updateFilter={updateFilter}  />
    </section>
  );
};

export default Search;
