import React, { useState, useEffect } from 'react';
import ProductGrid from '../Components/ProductGrid';
import Header from '../Components/Header';
import CartCard from '../Components/CartAlert'; // Import CartCard component
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart hook to access cart context
import products from '../data/productsData';
import '../App.css';

function Shop() {
  const productsPerPage = 12;
  const navigate = useNavigate();
  const location = useLocation();
  const { showCartAlert, cartItems } = useCart(); // Destructure showCartAlert from context

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page')) || 1;
  const categoryFromURL = query.get('category') || 'All Products';

  const [filter, setFilter] = useState(categoryFromURL);
  const [sort, setSort] = useState('best selling');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortedProducts, setSortedProducts] = useState(products);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setFilter(categoryFromURL);
  }, [categoryFromURL]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      if (filter === 'All Products') return true;
      return product.category === filter;
    });
    setFilteredProducts(filtered);
  }, [filter]);

  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', '')) || 0;
      const priceB = parseFloat(b.price.replace('$', '')) || 0;

      if (sort === 'price low to high') return priceA - priceB;
      if (sort === 'price high to low') return priceB - priceA;
      if (sort === 'alphabetical a-z') return a.title.localeCompare(b.title);
      if (sort === 'alphabetical z-a') return b.title.localeCompare(a.title);

      return 0;
    });

    setSortedProducts(sorted);
  }, [sort, filteredProducts]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      <div className='shoppg-heading'>
        <Header
          heading="All Products"
          paragraph="Fill up your pantry stocks here"
        />
      </div>

      {/* Conditionally render the CartCard component based on showCartAlert */}
      {showCartAlert && cartItems.length > 0 && (
        <div className="cart-alert">
          <CartCard item={cartItems[cartItems.length - 1]} /> {/* Show the last added item */}
        </div>
      )}

      <div className='shoppg-container'>
        <div className='left-block-shoppg'>
          <h3>Filter By</h3>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All Products">All Products</option>
            <option value="Grains & Flour">Grains & Flour</option>
            <option value="Lentils">Lentils</option>
            <option value="Baking">Baking</option>
            <option value="Sugar">Sugar</option>
            <option value="Rice">Rice</option>
          </select>

          <h3>Sort By</h3>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="best selling">Best Selling</option>
            <option value="price low to high">Price: Low to High</option>
            <option value="price high to low">Price: High to Low</option>
            <option value="alphabetical a-z">Alphabetical: A-Z</option>
            <option value="alphabetical z-a">Alphabetical: Z-A</option>
          </select>
        </div>

        <div className="Shop-Container">
          <ProductGrid products={currentProducts} />
        </div>
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  );
}

export default Shop;
