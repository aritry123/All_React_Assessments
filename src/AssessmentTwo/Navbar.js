import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>
            Sign Up
          </NavLink>
          <NavLink to='/signIn' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>
            Sign In
          </NavLink>
          <NavLink to='/dashboard' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>
            Dashboard
          </NavLink>
          <NavLink to='/products' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>
            Shopping
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;