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
          <div>
            {props.active_user.user.user_image !== null ?
              <div> 
                <img src={props.active_user.user.user_image} alt={props.active_user.user.username} />
                <button>Edit Profile Image</button>
              </div> : <button>Add Profile Image</button>}
          </div>
          <div>
            <p>{props.active_user.user.username}</p>
            <button>Edit</button>
          </div>
          <button>Change Password</button>
          <div>
            <p>{props.active_user.user.age}</p>
            <button>Edit</button>
          </div>
          <h3>Bio</h3>
          <div>
            <p>{props.active_user.user.bio}</p>
            <button>Edit</button>
          </div>
          {/* <div>
            <h3>Beer Badges</h3>
          </div> */}
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