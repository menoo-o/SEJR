import React from 'react'
import Header from '../Components/Header'
import Grid from '../Components/Grid'

const blogInfo = [
  {
  id: 1,
  title: 'How to make healthy oatmeal?',
  imageUrl: '/blogs/01.webp', // Replace with actual image paths
  },
  {
  id: 2,
  title: 'How to make Fruit Salad?',
  imageUrl: '/blogs/02.jpg', // Replace with actual image paths
  },
  {
  id: 3,
  title: "Nuts Creamery",
  imageUrl: 'blogs/03.webp', // Replace with actual image paths
  },
  {
  id: 4,
  title: 'How to make makhni dal',
  imageUrl: 'blogs/04.webp', // Replace with actual image paths
  },
  {
  id: 5,
  title: 'What to cook for breakfast?',
  imageUrl: '/blogs/01.webp', // Replace with actual image paths
  },
  {
  id: 6,
  title: 'Recipes to maintain Nutrition',
  imageUrl: '/blogs/02.jpg', // Replace with actual image paths
  },
  // Add more blog objects here as needed
  ];


const Recipes = () => {
  return (
    <>
    {/* same div used for blogs and recipes page */}
    
    <div className='blogs-container'>
      <Header 
        heading="Recipes" 
        paragraph="Find Your Next Favorite Recipe"
      />

      <Grid blogs={blogInfo} />
      
      </div>
    </>
  )

  
}

export default Recipes
