import React, { useState }from 'react';
import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { FormDiv } from '../styles/Styled';
import GuestNavbar from './GuestNavbar';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LoginForm = props =>{
    const { register, handleSubmit, watch, errors, setValue } = useForm();

    const [user, setUser] = useState({
      username: '',
      password: ''
    });

    const registerUser = () => {
      props.history.push('/register');
    };

    const handleChanges = e =>{
      e.preventDefault();
      setUser({
          ...user,
          [e.target.name]: e.target.value
      });
    };

    const onSubmit = () => {
      axiosWithAuth().post('/auth/login', user)
        .then(res => {
          console.log('POST', res);
          window.localStorage.setItem('user_id', res.data.user.id);
          window.localStorage.setItem('user_username', res.data.user.username);
          window.localStorage.setItem('token', res.data.token);
          props.history.push('/my-dashboard');
        })
        .catch(error => {
          console.log(error);
        });
    };

    return(
        <>
        <GuestNavbar />
        <FormDiv>
            <h2 className='form-title'>Login</h2>
            <form className='login-user' onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input name='username'
                onChange={handleChanges}
                ref={register({ required: true})} />              
            {errors.username && 'Username Required'}
            {errors.username &&
                errors.username.type === 'maxLength' && 'Please use less than 10 characters'}
            <label>Password</label>
            <input type='password' name='password'
              onChange={handleChanges} 
              ref={register({required: true, minLength: 8})} />
            {errors.password && 'Password Required'}
            <div className='form-btn-main'>
            <div className='form-submit'>
                <button className='form-action main' type='submit'>Login</button>
            </div>
            <div className='route-form'>
                <label>New User?</label>
                <button className='form-action' onClick={() => registerUser()}>Register</button>                   
            </div>         
            </div>
        </form>
        </FormDiv>
      </>
    )
}

const mapPropsToState = state =>{
    return{
        isFetching: state.isFetching
    };
};

export default connect(mapPropsToState, {})(LoginForm)