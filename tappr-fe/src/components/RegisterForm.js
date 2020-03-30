import React from 'react'
import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { FormDiv } from '../styles/Styled'

const RegisterForm = props =>{
    const { register, handleSubmit, watch, errors } = useForm();
    return(
        <FormDiv>
            <label>Username</label>
            <input name='username'></input>

            <label>Password</label>
            <input type='password' name='password'></input>
            {/* add a second Password input for verification? Possible stretch? */}
            <label>Birthday</label>
            <input type='date' name='birthday'></input>

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

export default connect(mapPropsToState, {})(Register)