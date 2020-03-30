import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GuestNavbar from './GuestNavbar';

const Dashboard = (props) => {
  const [randomBeers, setRandomBeers] = useState([]);

  useEffect(() => {
    // Fetch Beer List
    // Fetch Random Beer List
  }, []);

  return (
    <div>
      <GuestNavbar />
      {props.isFetching ? (<div>Tapping the Keg...</div>) : (
        <div>
          <div>
            <h2>Featured Beers</h2>
            {randomBeers.map((beer) => {
              <Link to='/'>
                <div key={beer.id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <h5>{beer.name}</h5>
                  <p>{beer.abv}</p>
                </div>
              </Link>
            })}
          </div>

          <div>
            {props.beer.map((beer) => {
              <Link to="/">
                <div key={beer.id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <h3>{beer.name}</h3>
                  <p><i>{beer.tagline}</i></p>
                  <p>{beer.description}</p>
                  <p>{beer.abv}</p>
                </div>
              </Link>
            })}
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

export default connect(mapStateToProps, {})(Dashboard);