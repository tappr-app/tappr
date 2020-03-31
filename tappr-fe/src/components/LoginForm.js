import React, { useState }from 'react';
import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { FormDiv } from '../styles/Styled';
import GuestNavbar from './GuestNavbar';

const LoginForm = props =>{
    const { register, handleSubmit, watch, errors, setValue } = useForm();

    const registerUser = () => {
      props.history.push('/register');
    }

    const onSubmit = data => console.log(data)
    return(
        <>
        <GuestNavbar />
        <FormDiv>
            <h2 className='form-title'>Login</h2>
            <form className='login-user' onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input name='username'
                ref={register({ required: true})}/>              
            {errors.username && 'Username Required'}
            {errors.username &&
                errors.username.type === 'maxLength' && 'Please use less than 10 characters'}
            <label>Password</label>
            <input type='password' name='password' ref={register({required: true, minLength: 8})}></input>
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