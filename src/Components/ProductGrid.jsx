import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';
import { useCart } from '../contexts/CartContext';
import '../App.css';

const ProductGrid = ({ products }) => {
  const { addItem } = useCart(); // Get addItem from context
  const [layout, setLayout] = useState([]);
  const [cols, setCols] = useState(12);
  const [width, setWidth] = useState(1200);
  const [selectedWeights, setSelectedWeights] = useState(Array(products.length).fill('250g'));
  const [quantities, setQuantities] = useState(Array(products.length).fill(1));

  const generateLayout = (cols) => {
    return products.map((item, index) => ({
      i: index.toString(),
      x: (index % cols) * (12 / cols),
      y: Math.floor(index / cols) * 2,
      w: 12 / cols,
      h: 3,
    }));
  };

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setCols(6);
        setWidth(600);
        setLayout(generateLayout(2));
      } else {
        setCols(12);
        setWidth(1200);
        setLayout(generateLayout(4));
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, [products]);

  const handleWeightClick = (index, weight) => {
    const newWeights = [...selectedWeights];
    newWeights[index] = weight;
    setSelectedWeights(newWeights);
  };

  const handleQuantityChange = (index, quantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = quantity;
    setQuantities(newQuantities);
  };

  const handleAddToCart = (item, index) => {
    addItem(item, selectedWeights[index], quantities[index]);
  };

  const computePrice = (basePrice, weight) => {
    let multiplier = 1;
    if (weight === '500g') multiplier = 2;
    if (weight === '1kg') multiplier = 4;
    const numericPrice = parseFloat(basePrice.replace(/[^0-9.]/g, ''));
    return `$${(numericPrice * multiplier).toFixed(2)}`;
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={cols}
      rowHeight={150}
      width={width}
      isDraggable={false}
      isResizable={false}
    >
      {products.map((item, index) => (
        <div key={index} className="product-card">
          <img src={item.imgSrc} alt={item.title} className='shoppg-img' />
          <h3>{item.title}</h3>
          <p>{computePrice(item.price, selectedWeights[index])}</p>
          <div className="weight-options">
            {['250g', '500g', '1kg'].map((weight) => (
              <button
                key={weight}
                className={`weight-btn ${selectedWeights[index] === weight ? 'active' : ''}`}
                onClick={() => handleWeightClick(index, weight)}
              >
                {weight}
              </button>
            ))}
          </div>
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(index, Math.max(1, quantities[index] - 1))}>-</button>
            <input
              type="number"
              value={quantities[index]}
              min="1"
              onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
            />
            <button onClick={() => handleQuantityChange(index, quantities[index] + 1)}>+</button>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(item, index)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </GridLayout>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default ProductGrid;
