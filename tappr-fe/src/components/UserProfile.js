import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import UserNavbar from './UserNavbar';
import { getProfile } from '../actions/index';
import {
  LoadingText,
  SectionTitle,
  UserImage,
  UserImageDiv,
  UserName,
  UserText,
  UserButtonDiv
} from '../styles/Styled';
import { Button } from 'react-bootstrap';

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
          <SectionTitle>{props.active_user.user.username}</SectionTitle>
          <UserImageDiv>
            {props.active_user.user.user_image !== null ?
              <UserImage src={props.active_user.user.user_image} alt={props.active_user.user.username} /> : null}
          </UserImageDiv>

          <div>
            <UserName>Age</UserName>
            <UserText>{props.active_user.user.age}</UserText>
            <UserName>Bio</UserName>
            <UserText>{props.active_user.user.bio}</UserText>
            {/* <div>
              <h3>Beer Badges</h3>
            </div> */}
            <UserButtonDiv>
              <Button variant="warning" onClick={() => editProfile()}>Edit Profile</Button>
            </UserButtonDiv>
          </div>
        </div>
      : <LoadingText>Loading user profile...</LoadingText>}
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