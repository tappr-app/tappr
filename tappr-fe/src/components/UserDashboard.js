import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserNavbar from './UserNavbar';

const UserDashboard = (props) => {
  const [randomBeers, setRandomBeers] = useState([]);
  const [myBeers, setMyBeers] = useState([]);

  useEffect(() => {
    // Fetch Beer List
    // Fetch Random Beer List and setRandomBeers
    // Fetch User Beers and setMyBeers
  }, []);

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

export default connect(mapStateToProps, {})(UserDashboard);