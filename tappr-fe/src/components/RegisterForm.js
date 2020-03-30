import React from 'react'
import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { FormDiv } from '../styles/Styled'

const RegisterForm = props =>{
    const { register, handleSubmit, watch, errors } = useForm();
    return(
        <FormDiv>
            <label>Username</label>
            <input name='username' ref={register({required: true, maxLength: 10})}></input>
            {errors.username &&
                errors.username.type === 'required' && 'Required Field'}
            {errors.username &&
                errors.username.type === 'maxLength' && 'Please use less than 10 characters'}
            <label>Password</label>
            <input type='password' name='password' ref={register({required: true, minLength: 8})}></input>
            {/* add a second Password input for verification? Possible stretch? Also make some regex requirements? */}
            <label>Age</label>
            <input type='number' name='age' ref={register({required: true, min: 21, max: 99})}></input>

            {/* <label>Birthday</label>
            <input type='date' name='birthday' ref={register({required})}></input> 
            Make a birthday format? Write function to verify user age (is this an action or should I write the fn in the scope of this component?) */}

            <label>Bio(Optional)</label>
            <textarea></textarea>
        </FormDiv>
    )
}

const mapPropsToState = state =>{
    return{
        isFetching: state.isFetching
    };
};

export default connect(mapPropsToState, {})(RegisterForm)