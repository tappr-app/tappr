import React, { useState } from 'react';

import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { handlePostData } from '../actions/index'

import { FormDiv } from '../styles/Styled'

const RegisterForm = props =>{
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        bio: ''
    })
    console.log(props)
    const handleChanges = e =>{
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })

    }
    const onSubmit = e => {
        e.preventDefault();
        props.handlePostData()
    }
    console.log(newUser)
    return(
        
        <FormDiv>
            <h2 className='form-title'>Register</h2>
            <form className='register-user' onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input name='username' onChange={handleChanges}
                ref={register({ required: true, maxLength: 10})}/>              
            {errors.username &&
                errors.username.type === 'required' && 'Required Field'}
            {errors.username &&
                errors.username.type === 'maxLength' && 'Please use less than 10 characters'}
            <label>Password</label>
            <input type='password' name='password' onChange={handleChanges} ref={register({required: true, minLength: 8})}></input>
            {errors.password &&
                errors.password.type === 'required' && 'Required Field'}
            {errors.username &&
                errors.password.type === 'minLength' && 'Please use at least 8 characters'}
            {/* add a second Password input for verification? Possible stretch? Also make some regex requirements? */}
            {/* ADD AGE REQUIREMENT? */}
            {/* <label>Age</label>
            <input type='number' name='age' onChange={handleChanges} ref={register({required: true, min: 21})}></input> */}
            {/* {errors.username &&
                errors.age.type === 'required' && 'Required Field'}
            {errors.username &&
                errors.age.type === 'min' && 'Must be at least 21!'} */}

            {/* <label>Birthday</label>
            <input type='date' name='birthday' ref={register({required})}></input> 
            Make a birthday format? Write function to verify user age (is this an action or should I write the fn in the scope of this component?) */}

            <label>Bio(Optional)</label>
            <textarea className='user-bio' name='bio' onChange={handleChanges} ref={register({ maxLength: 500 })}></textarea>
            <div className='form-btn-main'>
                <div className='form-submit'>
                    <button className='form-action main' type='submit'>Register</button>
                </div>
                <div className='route-form'>
                    <label>Returning?</label>
                    <button className='form-action'>Login</button>
                </div>
                
            </div>
        </form>
        </FormDiv>
    )
}

const mapPropsToState = state =>{
    return{
        isFetching: state.isFetching
    };
};

export default connect(mapPropsToState, { handlePostData })(RegisterForm)