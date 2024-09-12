// BlogGrid.js
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; // Ensure to create and import this CSS file

const Grid = ({ blogs }) => {
  return (
    <div className='blog-grid'>
      {blogs.map(blog => (
        <div className='blog-card' key={blog.id}>
          <img src={blog.imageUrl} alt={blog.title} className='blog-image' />
          <h3 className='blog-title'>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
}

// Define PropTypes for type checking
Grid.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Grid;
