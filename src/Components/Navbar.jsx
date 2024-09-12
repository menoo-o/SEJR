import '../App.css'
import '../Components/Nav.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropNav from './DropNav';
import { faUser, faCartShopping, faMagnifyingGlass,  faCheck, faTruckFast, faCube, faCreditCard } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },

  ];
return (
  <>
      <nav>
        <section className="nav-bar">

        <div className='bars'>
            <DropNav />
        </div>

          <div className="logo">
              <NavLink 
               to='/'
              >
                <img src="/logo/1.png" alt="logo" />  
              </NavLink>
              
          </div>

          <div className="nav-links">
            {routes.map((route) => (
              <NavLink 
                key={route.path}
                to='/'
                // to={route.path} 
                activeClassName="active-link"
                exact={route.path === '/'}
              >
               {route.name}
              </NavLink>
      ))}
    </div>

          <div className="search">
               <a href="#"> <FontAwesomeIcon icon={faMagnifyingGlass}  />  </a>
               <NavLink to="/">
                 <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
               <a href="#"> <FontAwesomeIcon icon={faUser} className='fa-user'  />  </a>
          </div>

         


        </section>

        <section className="mini-nav">
          <div className="icons">
              <div className="icon1">
                  <p className="icon-text" > <FontAwesomeIcon icon={faCheck} className="icons-links" />Free shipping</p>
              </div>           
              <div className="icon2 leaf">
                <p className="icon-text"><FontAwesomeIcon icon={faCreditCard} className="icons-links"/>Advance Payment</p>
              </div> 
              <div className="icon3">
                  <p className="icon-text"><FontAwesomeIcon icon={faCube} className="icons-links" />Delievering Nationwide</p>
              </div>
              <div className="icon4">
                  <p className="icon-text"><FontAwesomeIcon icon={faTruckFast} className="icons-links" />Swift delivery</p>
              </div>
          </div>
        </section>

        <div className="main__container">
        
        <section className="enable-animation">

          <div className="marquee">
            <ul className="marquee__content">
              <div className=" marquee__item">
                <p className="icon-text" > <FontAwesomeIcon icon={faCheck} className="icons-links" /> Free shipping</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faCreditCard} className="icons-links"/>Advance Payment</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faCube} className="icons-links" />Delievering Nationwide</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faTruckFast} className="icons-links" />Swift delivery</p>
              </div>
            </ul>
  
            <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item">
                <p className="icon-text" > <FontAwesomeIcon icon={faCheck} className="icons-links" />Free shipping</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faCreditCard} className="icons-links"/>Advance Payment</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faCube} className="icons-links" />Delievering in Islamabad</p>
              </div>
              <div className=" marquee__item">
              <p className="icon-text"><FontAwesomeIcon icon={faTruckFast} className="icons-links" />Swift delivery</p>
              </div>
            </ul>
          </div>
        </section>
        </div>


  </nav>
  </>
)}
export default Navbar