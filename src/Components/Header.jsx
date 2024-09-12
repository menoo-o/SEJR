import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes library
import '../App.css'; // Import the CSS for styling

const Header = ({ heading, paragraph }) => {
  return (
    
      <div className='blogs-heading'>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div> 

  );
}

// Define the prop types for the component
Header.propTypes = {
  heading: PropTypes.string.isRequired,  // 'heading' should be a string and is required
  paragraph: PropTypes.string.isRequired // 'paragraph' should be a string and is required
};

export default Header;
