// SaleItems.jsx
import React from 'react';
import Button from './Button';
import CarouselComponent from './CarouselComponent';
import PropTypes from 'prop-types'; // For prop types validation
import saleData from '../data/saleData'; // Sale products data

const SaleItems = ({ quantities, onQuantityChange }) => {
  return (
    <section>
      <div className="heading-items">
        <h1>SALE ITEMS</h1>
        <Button />
      </div>
      <CarouselComponent 
        items={saleData} 
        quantities={quantities} 
        onQuantityChange={onQuantityChange} 
      />
    </section>
  );
};

SaleItems.propTypes = {
  quantities: PropTypes.object.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default SaleItems;
