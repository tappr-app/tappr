import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const UserNavbar = (props) => {
  const history = useHistory()
  const user_username = window.localStorage.getItem('user_username');
  const user_id = window.localStorage.getItem('user_id');

  const userProfile = (id) => {
    history.push(`/my-profile/${id}`);
  };

  const userBrews = (id) => {
    history.push(`/my-brews/${id}`);
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_username');
    history.push('/login');
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