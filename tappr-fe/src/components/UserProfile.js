import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import UserNavbar from './UserNavbar';
import { getProfile } from '../actions/index';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UserProfile = props => {
  const { id } = useParams();

  useEffect(()=>{
    props.getProfile(id);
  }, []);

  const editProfile = newData => {
    props.history.push(`/my-profile/${id}/edit`)
  };

  return (
    <div>
      <UserNavbar />
      {props.readyToMount ?
        <div>
          <h2>{props.active_user.user.username}</h2>
          <div>
            {props.active_user.user.user_image !== null ?
              <img src={props.active_user.user.user_image} alt={props.active_user.user.username} /> : null}
          </div>

          <div>
            <p>Username: {props.active_user.user.username}</p>
            <p>Age: {props.active_user.user.age}</p>
            <h3>Bio</h3>
            <p>{props.active_user.user.bio}</p>
            {/* <div>
              <h3>Beer Badges</h3>
            </div> */}
            <button onClick={() => editProfile()}>Edit Profile</button>
          </div>
        </div>
      : <div>Loading user profile...</div>}
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