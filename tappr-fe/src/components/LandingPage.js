import React from 'react';

import GuestNavbar from './GuestNavbar'

const LandingPage = () => {
  return (
    <div>
      <GuestNavbar />
      <header>
        <h1>TAPPR</h1>
      </header>
      <button>Get Started</button>
      <div className='app-features'>
        <h2>What is Tappr?</h2>
        <p>App Description</p>
        <div className='ft-list'>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className='steps-box'>
        <div>
          <h3>Register</h3>
        </div>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <h3>Start happy hour!</h3>
        </div>
      </div>

      
    </div>
  );
};

export default LandingPage;