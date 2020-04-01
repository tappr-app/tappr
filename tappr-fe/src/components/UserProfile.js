import React from 'react';
import { connect } from 'react-redux'

const UserProfile = () => {
  return (
    <div>
      <span>Image here</span>
      <h2>Username</h2>
      <p>Bio</p>
      <div>
        <h3>Badges</h3>
      </div>
    </div>
  );
};

const mapPropsToState = state =>{
  return{
    isFetching: state.isFetching
  }
}

export default connect(mapPropsToState, {})(UserProfile);