import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProfile } from '../actions/index';

const UserProfile = props => {
  const id = window.localStorage.getItem('user_id')
  useEffect(()=>{
    props.getProfile(id)
  }, [])
  return (
    <div>
      {props.isFetching ? (<div>Grabbing your tab!</div>)
      :
      <div>
        <span>Image here</span>
        <h2>{props.current_user.user.username}</h2>
        <p>{props.current_user.user.username}</p>
        <div>
          <h3>Badges</h3>
        </div>
      </div>
      }
    </div> 
  );
};

const mapPropsToState = state =>{
  return{
    current_user: state.current_user,
    isFetching: state.isFetching
  }
}

export default connect(mapPropsToState, { getProfile })(UserProfile);