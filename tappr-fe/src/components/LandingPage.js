import React from 'react';
import { Link } from 'react-router-dom';
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
        <p>There are over 6500 breweries in the U.S. alone. With all that hoppy goodness, there are a lot of beers that will come and go; forgotten and underappreciated.</p>
        <p>Well, not on our watch! Tappr is here to champion the beer community and offer a way to appreciate your pint on another level. Why just "drink beer" when you can make a collection of taste?</p>
        <div className='ft-list'>
          <h4>Tappr Features</h4>
          <ul>
            <li>Track what you've tried</li>
            <li>Find new beers to try</li>
            <li>Add beers to your collection</li>
          </ul>
        </div>
      </div>
      <div className='steps-box'>
        <h2>Ready to party? It's easy to get started: </h2>
        <div>
          <h3>Register</h3>
          <ul>
            <li>Make a Username</li>
            <li>Set your password</li>
          </ul>
        </div>
        <div>
          <h3>Lager-In</h3>
          <ul>
            <li>Sign-in with your new credentials</li>
          </ul>
        </div>
        <div>
          <h3>Start happy hour!</h3>
          <span role='img' aria-label='beer-clink' alt='beer-salute'>🍻</span>
        </div>
      </div>
      <Link to='/register'><span>Register Here</span></Link>
      <footer>
        <span>Tappr was developed and maintained by <a href='https://github.com/anhogan'>@anhogan</a> and <a href='https://github.com/landoDev'>@landoDev</a></span>
      </footer>

      
    </div>
  );
};

export default LandingPage;