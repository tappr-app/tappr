import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPunkBeers, addMyBrews } from '../actions/index';
import UserNavbar from './UserNavbar';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UserDashboard = (props) => {
  const user_id = window.localStorage.getItem('user_id');

  const [randomBeers, setRandomBeers] = useState([]);
  const [myBeers, setMyBeers] = useState([]);

  const randomABV = Math.floor((Math.random() * 8) + 6);
  const randomPage = Math.floor((Math.random() * 20) + 1);

  useEffect(() => {
    props.getPunkBeers();

    axios.get(`https://api.punkapi.com/v2/beers/?abv_lt=${randomABV}&page=${randomPage}&per_page=5`)
      .then(res => {
        setRandomBeers(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  
    axiosWithAuth().get(`/users/${user_id}`)
      .then(res => {
        setMyBeers(res.data.user.beers);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleAddBrew = e =>{
    e.preventDefault();
    props.addMyBrews(user_id);
  }

  return (
    <div>
      <UserNavbar />
      {props.isFetching ? (<div>Tapping the Keg...</div>) : (
        <div>
          <div>
            <h2>Featured Beers</h2>
            {randomBeers.map((beer) => (
              <Link to="/">
                <div key={beer.id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <h5>{beer.name}</h5>
                  <p>{beer.abv}</p>
                  <button onClick={handleAddBrew}>Add to My Brews</button>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <h2>Drinkscover</h2>
            {props.beer.map((beer) => (
              <Link to="/">
                <div key={beer.id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <h3>{beer.name}</h3>
                  <p><i>{beer.tagline}</i></p>
                  <p>{beer.description}</p>
                  <p>{beer.abv}</p>
                  <button>Favorite</button>
                </div>
              </Link>
            ))}
          </div>

          {myBeers !== undefined ? 
            <div>
              <h2>Favorite Brews</h2>
              {myBeers.map((beer) => (
                <Link to="/">
                  <div key={beer.id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h5>{beer.name}</h5>
                    <p>{beer.abv}</p>
                  </div>
                </Link>
              ))}
              <Link to="/">View All</Link>
            </div>
          : <h3>No Favorites Yet, Drink More to Find Some</h3>}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    beer: state.beer,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getPunkBeers, addMyBrews })(UserDashboard);