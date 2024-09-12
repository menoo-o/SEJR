import React from 'react';
import PropTypes from 'prop-types';

const QuantitySelector = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="quantity-selector">
      <button onClick={onDecrement}>-</button>
      <input type="number" value={quantity} min="1" readOnly />
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

// Define prop types
QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default QuantitySelector;
