// src/Components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner of the page
  }, [pathname]); // Run this effect whenever the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
