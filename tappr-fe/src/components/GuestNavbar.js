import React from 'react';
import { Navbar, NavLinks } from '../styles/Styled';

const GuestNavbar = () => {
  return (
    <div>
      <Navbar>
        <h2><span role='img' aria-label='beer-clink' alt='beer-salute'>🍻</span>Tappr</h2>
        <NavLinks href='/'>Home</NavLinks>
        <NavLinks href='/dashboard'>Tap List</NavLinks>
        <NavLinks href='/register'>Register</NavLinks>
        <NavLinks href='/login'>Lager-In</NavLinks>
      </Navbar>
    </div>
  );
};

export default GuestNavbar;