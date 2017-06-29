import React from 'react';
import HomeMap from '../home_map/home_map';
import HomeIndex from '../home_index/home_index';
import { HousingForm, PricingForm } from './filter_form';

class Search extends React.Component {

  filterBar() {
    return (
      <div className="filter-bar-index">
        <PricingForm
        minPrice={this.props.minPrice}
        maxPrice={this.props.maxPrice}
        updateFilter={this.props.updateFilter}
        />

        <HousingForm
        minHousing={this.props.minHousing}
        maxHousing={this.props.maxHousing}
        updateFilter={this.props.updateFilter}
        />

      </div>
    )
  };

  render() {
    return (
      <section className='index-container'>
      <HomeMap homes={this.props.homes} updateFilter={this.props.updateFilter}  />
      {this.filterBar()}
      <HomeIndex homes={this.props.homes} />
      </section>
    );
  }
};

export default Search;
