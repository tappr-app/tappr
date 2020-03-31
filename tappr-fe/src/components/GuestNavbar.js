import React from 'react';
import { Link } from 'react-router-dom';

const GuestNavbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Tap List</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default GuestNavbar;