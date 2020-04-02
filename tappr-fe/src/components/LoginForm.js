import React, { useState }from 'react';
import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { handleLogin } from '../actions/index'
import { FormDiv } from '../styles/Styled'
import GuestNavbar from './GuestNavbar';

const LoginForm = props =>{
    const { register, handleSubmit, errors} = useForm();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const handleChanges = e =>{
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        props.handleLogin(credentials)
        props.history.push('/my-dashboard');
    }
    
    const registerUser = () => {
      props.history.push('/register');
    };
  
    return(
      <>
        <GuestNavbar />
        <FormDiv>
            <h2 className='form-title'>Lager-In</h2>
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
                <button className='form-action main' type='submit'>Lager-In</button>
            </div>
            <div className='route-form'>
                <label>New User?</label>
                <button className='form-action' onClick={() => registerUser()}>Register</button>                   
            </div>         
            </div>
          </form>
        </FormDiv>       
      </>
    );
};

const mapPropsToState = state =>{
    return{
        isPosting: state.isPosting,
        error: state.error
    };
};

export default connect(mapPropsToState, { handleLogin })(LoginForm)