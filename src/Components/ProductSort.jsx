import React from 'react';
import PropTypes from 'prop-types';

function ProductSort({ sort, handleSortChange }) {
  return (
    <>
      <h3 className='sortby'>Sort By</h3>
      <select value={sort} onChange={handleSortChange} className='sort-select'>
        <option value="best selling">Best Selling</option>
        <option value="price low to high">Price Low to High</option>
        <option value="price high to low">Price High to Low</option>
        <option value="alphabetical a-z">Alphabetical A-Z</option>
        <option value="alphabetical z-a">Alphabetical Z-A</option>
      </select>
    </>
  );
}

ProductSort.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default ProductSort;
