import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import UserNavbar from './UserNavbar';
import { updateUser, getProfile } from '../actions/index';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { 
  OuterFormDiv,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormTextBox,
  FormButtonMainDiv,
  FormButtonDiv
 } from '../styles/Styled';
 import { Button } from 'react-bootstrap';

const EditProfile = props => {
  const { id } = useParams();

  const [userData, setUserData] = useState({
    id: id,
    username: '',
    password: '',
    age: '',
    bio: '',
    user_image: ''
  });

  useEffect(()=>{
    axiosWithAuth().get('https://tappr-app-api.herokuapp.com/api/users')
      .then(res => {
        const userToEdit = res.data.find(user => {
          return user.id == id;
        });

        if (userToEdit) {
          setUserData(userToEdit);
        };
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
    console.log(userData);
  };

  const handleSubmit = id => {
    props.updateUser(userData);
    props.history.push(`/my-profile/${id}`);
  };

  const cancel = () => {
    props.history.goBack();
  };

  return (
    <div>
      <UserNavbar />
      <OuterFormDiv>
        <Form>
          <FormTitle>{userData.username}</FormTitle>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput
            id="username"
            name="username"
            defaultValue={userData.username}
            onChange={handleChange} />
          <br />
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            id="password"
            name="password"
            defaultValue={userData.password}
            onChange={handleChange} />
          <br />
          <FormLabel htmlFor="age">Age</FormLabel>
          <FormInput
            id="age"
            name="age"
            defaultValue={userData.age}
            onChange={handleChange} />
          <br />
          <FormLabel htmlFor="user_image">Avatar</FormLabel>
          <FormInput
              id="user_image"
              name="user_image"
              defaultValue={userData.user_image}
              onChange={handleChange} />
          <br />
          <FormLabel htmlFor="bio">Bio</FormLabel>
          <FormTextBox
              id="bio"
              name="bio"
              defaultValue={userData.bio}
              onChange={handleChange} />
          <br />
          <FormButtonMainDiv>
            <FormButtonDiv>
              <Button variant="warning" onClick={() => handleSubmit(id)}>Update Profile</Button>
            </FormButtonDiv>

            <FormButtonDiv>
              <Button variant="danger" onClick={cancel}>Cancel</Button>
            </FormButtonDiv>
          </FormButtonMainDiv>
        </Form>
      </OuterFormDiv>
    </div> 
  );
};

const mapPropsToState = state =>{
  return{
    active_user: state.active_user,
    isFetching: state.isFetching
  }
}

export default connect(mapPropsToState, { updateUser, getProfile })(EditProfile);