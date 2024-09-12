import React from 'react';
import PropTypes from 'prop-types';

function ProductFilter({ filter, handleFilterChange }) {
  return (
    <>
      <h3 className='filterby'>Filter By</h3>
      <select value={filter} onChange={handleFilterChange} className='filterby-select'>
        <option value="All Products">All Products</option>
        <option value="Grains & Flour">Grains & Flour</option>
        <option value="Lentils">Lentils</option>
        <option value="Baking">Baking</option>
        <option value="Sugar">Sugar</option>
        <option value="Rice">Rice</option>
      </select>
    </>
  );
}

ProductFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default ProductFilter;
