import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
import Text from 'react-text-typing'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/'>
            Sign Up
          </NavLink>
          <NavLink to='/signIn'>
            Sign In
          </NavLink>
          <NavLink to='/dashboard'>
            Dashboard
          </NavLink>
          <div className="nav-item dropdown">
          <button className="nav-link dropdown-toggle" role='button' id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Shopping
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><NavLink to='/shopping/home' className="dropdown-item">
            Home
          </NavLink></li>
          <li><NavLink to='/shopping/search' className="dropdown-item">
            Search Books
          </NavLink></li>
          <li><NavLink to='/shopping/price' className="dropdown-item">
            Price
          </NavLink></li>
          <li><NavLink to='/shopping/rating' className="dropdown-item">
            Rating
          </NavLink></li>
          </ul>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;