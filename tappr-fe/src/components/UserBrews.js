import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProfile } from '../actions/index';
import UserNavbar from './UserNavbar';

const UserBrews = (props) => {
  const id = window.localStorage.getItem('user_id')
  useEffect(()=>{
    props.getProfile(id)
  }, [])
  // onClick handler for Update Button
  const updateBeer = (id) => {
    props.history.push(`/update-a-beer/${id}`);
  };

  // onClick handler for Beer Details Button
  const beerDetails = (id) => {
    props.history.push(`/brews/${id}`);
  };

  return (
    <div>
    <div>
      <UserNavbar />
      {props.readyToMount ? 
        <div>
        <h2>{props.active_user.user.username}'s Brew Collection</h2>
        <div className='user-brews'>
        {props.active_user.beers.map(beer => {
          return(
          <div key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <h5>{beer.name}</h5>
            <p>{beer.abv}</p>
          </div> 
          )         
        })}
        </div>
        </div>
      :
      <div>Loading your personal tap...</div>
      }

    </div>       

    </div>
  );
};

const mapPropsToState = state =>{
  return{
    active_user: state.active_user,
    isFetching: state.isFetching,
    readyToMount: state.readyToMount
  }
}

export default connect(mapPropsToState, { getProfile })(UserBrews);