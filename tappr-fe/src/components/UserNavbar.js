import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = (props) => {
  const user_username = window.localStorage.getItem('user_username');
  const user_id = window.localStorage.getItem('user_id');

  const userProfile = (id) => {
    props.history.push(`/my-profile/${id}`);
  };

  const userBrews = (id) => {
    props.history.push(`/my-brews/${id}`);
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_username');
    props.history.push('/login');
  };

  return (
    <div>
      <nav>
        <Link to="/my-dashboard">Tap List</Link>
        <button onClick={() => userBrews(user_id)}>My Favorite Brews</button>
        <Link to="/add-a-beer">Add a Beer</Link>
        <button onClick={() => logout()}>Logout</button>
        <button onClick={() => userProfile(user_id)}>{user_username}</button>
      </nav>
    </div>
  );
};

export default UserNavbar;