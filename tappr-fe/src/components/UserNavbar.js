import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  const user_username = window.localStorage.getItem('user_username');

  return (
    <div>
      <nav>
        <Link to="/">Tap List</Link>
        <Link to="/">My Favorite Brews</Link>
        <Link to="/">Add a Beer</Link>
        <Link to="/">Logout</Link>
        {/* For user profile */}
        <Link to="/">{user_username}</Link>
      </nav>
    </div>
  );
};

export default UserNavbar;