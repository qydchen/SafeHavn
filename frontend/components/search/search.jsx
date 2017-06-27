import React from 'react';
import HomeMap from '../home_map/home_map';
import HomeIndex from '../home_index/home_index';

const Search = ({homes, fetchHomes}) => {
  return (
    <section className='index-container'>
      <HomeIndex homes={homes} fetchHomes={fetchHomes}/>
      <HomeMap homes={homes} fetchHomes={fetchHomes}/>
    </section>
  );
};

export default Search;
