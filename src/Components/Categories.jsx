import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Categories = () => {
  return (
    <>
      <section className="collection categories">
        <div className="list">
          {/* Scented Candles */}
          <NavLink to="/" className="image-container grains-cereals">
            <img src="/categories/01.png" alt="Bracelets" width="200" height="200" />
            <div>
              <p>Bracelets</p>
            </div>
          </NavLink>

          {/* Stickers */}
          <NavLink to="/" className="image-container Rice">
            <img src="/categories/02.png" alt="Necklace" width="200" height="200" />
            <div>
              <p>Necklace</p>
            </div>
          </NavLink>

          {/* Cards */}
          <NavLink to="/" className="image-container lentils-beans">
            <img src="categories/03.png" alt="Earrings" width="200" height="200" />
            <div>
              <p>Earrings</p>
            </div>
          </NavLink>

          {/* Cards */}
          <NavLink to="/" className="image-container lentils-beans">
            <img src="categories/04.png" alt="Rings" width="200" height="200" />
            <div>
              <p>Rings</p>
            </div>
          </NavLink>
          {/* Cards */}
          
          <NavLink to="/" className="image-container lentils-beans">
            <img src="categories/05.png" alt="Pendants" width="200" height="200" />
            <div>
              <p>Pendants</p>
            </div>
          </NavLink>

          {/* Cards */}
          <NavLink to="/" className="image-container lentils-beans">
            <img src="categories/06.png" alt="Anklets" width="200" height="200" />
            <div>
              <p>Anklets</p>
            </div>
          </NavLink>



        </div>
      </section>
    </>
  );
};

export default Categories;
