import React, { useState } from 'react';
import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { handlePostData } from '../actions/index';
import { FormDiv } from '../styles/Styled';
import { Button, Modal } from 'react-bootstrap';
import GuestNavbar from './GuestNavbar';

const RegisterForm = props =>{
    const { register, handleSubmit, errors} = useForm();

    const [show, setShow] = useState(false);

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        age: '',
        bio: '',
        user_image: ''
    });

    const handleChanges = e =>{
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        props.handlePostData(newUser);

        setNewUser({
          username: '',
          password: '',
          age: '',
          bio: '',
          user_image: ''
        })
        props.history.push('/my-dashboard');
    }
  
    const returntoLogin = () => {
      props.history.push('/login');
    };

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    
    return(
      <>
        {props.isPosting ? <div className='posting-user'>Creating your profile, pour a pint and get ready to lager-in!</div> :
          (
            <>
              <GuestNavbar />
              <FormDiv>
                <h2 className='form-title'>Register</h2>
                <form className='register-user' onSubmit={handleSubmit(handleShow)}>
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

                <label>Age</label>
                <input type='number' name='age' onChange={handleChanges} ref={register({required: true, min: 21})}></input>
                {errors.age &&
                    errors.age.type === 'required' && 'Required Field'}
                {errors.age &&
                    errors.age.type === 'min' && 'Must be at least 21!'}

                {/* <label>Birthday</label>
                <input type='date' name='birthday' ref={register({required})}></input> 
                Make a birthday format? Write function to verify user age (is this an action or should I write the fn in the scope of this component?) */}

                <label>Bio</label>
                <textarea className='user-bio' name='bio' onChange={handleChanges} ref={register({ maxLength: 500 })}></textarea>
                <div className='form-btn-main'>
                    <div className='form-submit'>
                        <Button variant="warning" type='submit'>Register</Button>
                    </div>
                    <div className='route-form'>
                        <label>Returning?</label>
                        <Button variant="info" onClick={() => returntoLogin()}>Lager-In</Button>
                    </div>
                  </div>
                </form>
              </FormDiv> 
            </>
          )
        }

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Please Drink Responsibly</Modal.Title>
            </Modal.Header>
            <Modal.Body>To use Tappr, pleaseagree to drink responsibly while exploring and tasting alcohol with this app.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                I'm Not Ready
              </Button>
              <Button variant="warning" onClick={onSubmit}>
                I Will Drink Responsibly
              </Button>
            </Modal.Footer>
          </Modal> 
        </>
    )
}

const mapPropsToState = state =>{
    return{
        isPosting: state.isPosting,
        error: state.error
    };
};

export default connect(mapPropsToState, { handlePostData })(RegisterForm)
