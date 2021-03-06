import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GuestNavbar from './GuestNavbar'


import { HeaderDiv, FeaturesFlexDiv, StepsBoxDiv, Footer } from '../styles/Styled'
import { Button } from 'react-bootstrap';

const LandingPage = () => {
  const history = useHistory();
  return (
    <div>
      <GuestNavbar />
      <HeaderDiv>
        <header>
          <h1 className="title-header">TAPPR</h1>
        </header>
        <Button variant="warning" onClick={()=> history.push('/register')}>Get Started</Button>
      </HeaderDiv>
      <FeaturesFlexDiv className='app-features'>
        <h2>What is Tappr?</h2>
        <p>There are over 6500 breweries in the U.S. alone. With all that hoppy goodness, there are a lot of beers that will come and go; forgotten and underappreciated.</p>
        <p>Well, not on our watch! Tappr is here to champion the beer community and offer a way to appreciate your pint on another level. Why just "drink beer" when you can make a collection of taste?</p>
        <div className='ft-list'>
          <div>
            <h4>Tappr Features</h4>
            <ul>
              <li>Find new beers to try</li>
              <li>Add beers to your collection</li>
            </ul>
          </div>
        </div>
      </FeaturesFlexDiv>
      <StepsBoxDiv>
        <h2>Ready to party? It's easy to get started: </h2>
        <div className="steps">
          <div className="box">
            <h3>Register</h3>
            <ul>
              <li>Make a Username</li>
              <li>Set your password</li>
            </ul>
          </div>
          <span className='arrow' role='img' aria-label='next-step' alt='arrow'>➡️</span>
          <div className="box">
            <h3>Lager-In</h3>
            <ul>
              <li>Sign-in with your new credentials</li>
            </ul>
          </div>
          <span className='arrow' role='img' aria-label='next-step' alt='arrow'>➡️</span>
          <div className="box">
            <h3>Start happy hour!</h3>
            <span role='img' aria-label='beer-clink' alt='beer-salute'>🍻</span>
            <Link className='register-link' to='/register'><span>Register Here</span></Link>
          </div>
        </div>
      </StepsBoxDiv>
      
      <Footer>
        <span>Tappr was developed and maintained by <a href='https://github.com/anhogan'>@anhogan</a> and <a href='https://github.com/landoDev'>@landoDev</a></span>
      </Footer>

      
    </div>
  );
};

export default LandingPage;