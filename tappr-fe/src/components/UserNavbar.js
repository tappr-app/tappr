import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../styles/Styled';

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
      <Navbar>
        <Link to="/my-dashboard">Tap List</Link>
        <Link to={`/my-brews/${user_id}`}>My Favorite Brews</Link>
        {/* <button onClick={() => userBrews(user_id)}>My Favorite Brews</button> */}
        <Link to="/add-a-beer">Add a Beer</Link>
        <Link to='/login' onClick={() => logout()}>My Favorite Brews</Link>
        {/* <button onClick={() => logout()}>Logout</button> */}
        <Link to={`/my-profile/${user_id}`}>{user_username}</Link>
        {/* <button onClick={() => userProfile(user_id)}>{user_username}</button> */}
      </Navbar>
    </div>
  );
};

export default UserNavbar;