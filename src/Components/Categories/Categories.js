import React from 'react';
import SearchBar from '../SearchBar'


const Categories = ({ categories, filterItems , searchResult, setSearchResult}) => {
  return (

    <div className="btn-container">
      <SearchBar searchResult={searchResult} setSearchResult={setSearchResult} />
      <div>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      </div>
    </div>
  );
};

export default Categories;
