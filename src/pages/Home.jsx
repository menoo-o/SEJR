// COMPONENTS
// import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Welcome from "../Components/Welcome"
import Categories from "../Components/Categories"
import NewArrivals from "../Components/NewArrivals"

import Recipes from "../Components/Recipes"
// import Footer from "../Components/Footer"
// CSS
import '../App.css'
import '../index.css'


function Home() {
  return (
    <div className="app-container">

      <main>
          <Hero />
          <Welcome />
          <Categories />
          <NewArrivals />
         
          <Recipes />
      </main>
      
      
    </div>
  );
}

export default Home;