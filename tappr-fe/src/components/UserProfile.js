import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProfile } from '../actions/index';

const UserProfile = props => {
  console.log('profile props', props)
  const id = window.localStorage.getItem('user_id')
  useEffect(()=>{
    props.getProfile(id)
  }, [])
  return (
    <div>
      {props.readyToMount ? 
        <div>
        <span></span>
        <h2>{props.active_user.user.username}</h2>
        <p>Bio</p>
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