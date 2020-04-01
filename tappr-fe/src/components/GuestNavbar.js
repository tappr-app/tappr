import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavLinks } from '../styles/Styled';

const GuestNavbar = () => {
  return (
    <div>
      <Navbar>
        <NavLinks href='/'>Home</NavLinks>
        <NavLinks href='/dashboard'>Tap List</NavLinks>
        <NavLinks href='/register'>Register</NavLinks>
        <NavLinks href='/login'>Login</NavLinks>
      </Navbar>
    </div>
  );
};

export default GuestNavbar;