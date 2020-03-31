import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = (props) => {
  const user_username = window.localStorage.getItem('user_username');
  const user_id = window.localStorage.getItem('user_id');

  const userProfile = (user_id) => {
    props.history.push(`/my-profile/${user_id}`);
  };

  const userBrews = (user_id) => {
    props.history.push(`/my-brews/${user_id}`);
  };

  return (
    <div>
      <nav>
        <Link to="/my-dashboard">Tap List</Link>
        <button onClick={() => userBrews(user_id)}>My Favorite Brews</button>
        <Link to="/add-a-beer">Add a Beer</Link>
        <Link to="/logout">Logout</Link>
        <button onClick={() => userProfile(user_id)}>{user_username}</button>
      </nav>
    </div>
  );
};

export default UserNavbar;