import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UserNavbar from './UserNavbar';
import { getProfile } from '../actions/index';

const UserProfile = props => {
  const id = window.localStorage.getItem('user_id')
  useEffect(()=>{
    props.getProfile(id)
  }, [])
  return (
    <div>
      <UserNavbar />
      {props.readyToMount ? 
        <div>
        <span></span>
        <h2>{props.active_user.user.username}</h2>
        <h3>Bio</h3>
        <p>{props.active_user.user.bio}</p>
        <div>
          <h3>Badges</h3>
        </div>
        </div>
      :
      <div>Loading your profile...</div>
      }

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

export default connect(mapPropsToState, { getProfile })(UserProfile);