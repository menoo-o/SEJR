import './DropNav.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group';

function DropNav() {
  return (
    <Navbar>
      <NavItem icon={<FontAwesomeIcon icon={faBars} className='bars-icon' />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

function NavItem(props) {
  const [open, setOpen] = useState(false);

  // Function to close the dropdown
  const closeDropdown = () => setOpen(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && React.Children.map(props.children, (child) => {
        // Cloning children to pass closeDropdown as a prop
        return React.cloneElement(child, { closeDropdown });
      })}
    </li>
  );
}

NavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
};

function DropdownMenu({ closeDropdown }) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem({ to, goToMenu, leftIcon, rightIcon, children, closeDropdown }) {
    const handleClick = () => {
      if (goToMenu) {
        setActiveMenu(goToMenu);
      }
      if (closeDropdown && !goToMenu) {
        closeDropdown(); // Close the dropdown if navigating
      }
    };

    return (
      <NavLink
        to={to}
        className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`}
        onClick={handleClick}
      >
        <span>{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </NavLink>
    );
  }

  DropdownItem.propTypes = {
    to: PropTypes.string,
    goToMenu: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    closeDropdown: PropTypes.func,
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={600}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem to="/" closeDropdown={closeDropdown}>Home</DropdownItem>
          <DropdownItem goToMenu="shop">Shop</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Collections</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Blogs</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Contact Us</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>About Us</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Login</DropdownItem>

          {/* Social Media Icons in a Row */}
          <div className="social-media-icons">
            <DropdownItem leftIcon={<FontAwesomeIcon icon={faWhatsapp} className='icon-left' />} closeDropdown={closeDropdown} />
            <DropdownItem leftIcon={<FontAwesomeIcon icon={faInstagram} className='icon-left' />} closeDropdown={closeDropdown} />
            <DropdownItem leftIcon={<FontAwesomeIcon icon={faFacebook} className='icon-left' />} closeDropdown={closeDropdown} />
            <DropdownItem leftIcon={<FontAwesomeIcon icon={faYoutube} className='icon-left' />} closeDropdown={closeDropdown} />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'shop'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faArrowLeft} className='icon-left' />} closeDropdown={closeDropdown}>
            <h2>Categories</h2>
          </DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>All Products</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Bracelets</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Necklace</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Earrings</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Rings</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Pendants</DropdownItem>
          <DropdownItem to="/" closeDropdown={closeDropdown}>Anklets</DropdownItem>
          
        </div>
      </CSSTransition>
    </div>
  );
}

DropdownMenu.propTypes = {
  closeDropdown: PropTypes.func,
};

export default DropNav;
