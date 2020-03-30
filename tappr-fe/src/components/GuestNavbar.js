import React from 'react';
import { Link } from 'react-router-dom';

const GuestNavbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Tap List</Link>
        <Link to="/">Register</Link>
        <Link to="/">Login</Link>
      </nav>
    </div>
  );
};

export default GuestNavbar;