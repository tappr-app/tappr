import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPunkBeers } from '../actions/index';
import GuestNavbar from './GuestNavbar';

const Dashboard = (props) => {
  const [randomBeers, setRandomBeers] = useState([]);
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
  }, []);

  return (
    <div>
      <GuestNavbar />
      {props.isFetching ? (<div>Tapping the Keg...</div>) : (
        <div>
          <div>
            <h2>Featured Beers</h2>
            {randomBeers.map((beer) => (
              <Link to='/'>
                <div key={beer.id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <h5>{beer.name}</h5>
                  <p>{beer.abv}</p>
                </div>
              </Link>
            ))}
          </div>

          <div>
            {props.beer.map((beer) => (
              <Link to="/">
                <div key={beer.id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <h3>{beer.name}</h3>
                  <p><i>{beer.tagline}</i></p>
                  <p>{beer.description}</p>
                  <p>{beer.abv}</p>
                </div>
              </Link>
            ))}
          </div>
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

export default connect(mapStateToProps, { getPunkBeers })(Dashboard);