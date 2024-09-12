import React from 'react';
// import { NavLink } from 'react-router-dom';
import Header from '../Components/Header';
import Grid from '../Components/Grid';

const blogInfo = [
  {
  id: 1,
  title: 'How important is breakfast?',
  imageUrl: '/blogs/01.webp', // Replace with actual image paths
  },
  {
  id: 2,
  title: '5 Easy Changes to Boost Nutrition',
  imageUrl: '/blogs/02.jpg', // Replace with actual image paths
  },
  {
  id: 3,
  title: "Interesting Facts You Didn't Know About Nuts",
  imageUrl: 'blogs/03.webp', // Replace with actual image paths
  },
  {
  id: 4,
  title: 'Top Tips For An Organised Pantry',
  imageUrl: 'blogs/04.webp', // Replace with actual image paths
  },
  {
  id: 5,
  title: 'How important is breakfast?',
  imageUrl: '/blogs/01.webp', // Replace with actual image paths
  },
  {
  id: 6,
  title: '5 Easy Changes to Boost Nutrition',
  imageUrl: '/blogs/02.jpg', // Replace with actual image paths
  },
  {
  id: 7,
  title: "Interesting Facts You Didn't Know About Nuts",
  imageUrl: 'blogs/03.webp', // Replace with actual image paths
  },
  {
  id: 8,
  title: 'Top Tips For An Organised Pantry',
  imageUrl: 'blogs/04.webp', // Replace with actual image paths
  },
  // Add more blog objects here as needed
  ];


const Blogs = () => {
  return (
    <div className='blogs-container'>

      <Header 
        heading="Zero-Waste Blog" 
        paragraph="Everything you need to kick start your sustainability journey!"
      />

      <Grid blogs={blogInfo} />


    </div>
  );
}

export default Blogs;