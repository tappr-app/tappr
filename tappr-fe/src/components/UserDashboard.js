import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

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
      {props.isFetching ? (<div>Tapping the Keg...</div>) : (
        <div>
          <div>
            <h2>Featured Beers</h2>
            {randomBeers.map((beer) => {
              <div key={beer.id}>
                <img src={beer.image_url} alt={beer.name} />
                <h5>{beer.name}</h5>
                <p>{beer.abv}</p>
              </div>
            })}
          </div>

          <div>
            <h2>Drinkscover</h2>
            {props.beer.map((beer) => {
              <div key={beer.id}>
                <img src={beer.image_url} alt={beer.name} />
                <h3>{beer.name}</h3>
                <p><i>{beer.tagline}</i></p>
                <p>{beer.description}</p>
                <p>{beer.abv}</p>
              </div>
            })}
          </div>

          <div>
            <h2>Favorite Brews</h2>
            {myBeers.map((beer) => {
              <div key={beer.id}>
                <img src={beer.image_url} alt={beer.name} />
                <h5>{beer.name}</h5>
                <p>{beer.abv}</p>
              </div>
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

export default connect(mapStateToProps, {})(UserDashboard);