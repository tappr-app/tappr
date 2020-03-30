import React from 'react'
import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { FormDiv } from '../styles/Styled'

const RegisterForm = props =>{
    const { register, handleSubmit, watch, errors, setValue } = useForm();

    const onSubmit = data => console.log(data)
    return(
        <FormDiv>
                <form className='register-user' onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input name='username'
                 ref={register({ required: true, maxLength: 10})}/>              
                {errors.username &&
                    errors.username.type === 'required' && 'Required Field'}
                {errors.username &&
                    errors.username.type === 'maxLength' && 'Please use less than 10 characters'}
                <label>Password</label>
                <input type='password' name='password' ref={register({required: true, minLength: 8})}></input>
                {errors.password &&
                    errors.password.type === 'required' && 'Required Field'}
                {errors.username &&
                    errors.password.type === 'minLength' && 'Please use at least 8 characters'}
                {/* add a second Password input for verification? Possible stretch? Also make some regex requirements? */}
                <label>Age</label>
                <input type='number' name='age' ref={register({required: true, min: 21})}></input>
                {errors.username &&
                    errors.age.type === 'required' && 'Required Field'}
                {errors.username &&
                    errors.age.type === 'min' && 'Must be at least 21!'}

                {/* <label>Birthday</label>
                <input type='date' name='birthday' ref={register({required})}></input> 
                Make a birthday format? Write function to verify user age (is this an action or should I write the fn in the scope of this component?) */}

                <label>Bio(Optional)</label>
                <textarea name='bio' ref={register({ maxLength: 500 })}></textarea>
                <button type='submit'>Register</button>
                <label>Already registered?</label>
                <button>Login</button>
            </form>
        </FormDiv>
    )
}

const mapPropsToState = state =>{
    return{
        isFetching: state.isFetching
    };
};

export default connect(mapPropsToState, {})(RegisterForm)