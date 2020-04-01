import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, NavLinks } from '../styles/Styled';

const UserNavbar = (props) => {
  const history = useHistory()
  const user_username = window.localStorage.getItem('user_username');
  const user_id = window.localStorage.getItem('user_id');

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_username');
    history.push('/login');
  };

  return (
    <div>
      <Navbar>
        <NavLinks href='/my-dashboard'>Tap List</NavLinks>
        <NavLinks href={`/my-brews/${user_id}`}>My Favorite Brews</NavLinks>
        <NavLinks href="/add-a-beer">Add a Beer</NavLinks>
        <NavLinks href='/login' onClick={() => logout()}>Logout</NavLinks>
        <NavLinks href={`/my-profile/${user_id}`}>{user_username}</NavLinks>
      </Navbar>
    </div>
  );
};

export default UserNavbar;