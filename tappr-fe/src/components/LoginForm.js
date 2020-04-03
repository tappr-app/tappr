import React, { useState }from 'react';
import{ useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/index';
import { FormDiv } from '../styles/Styled';
import { Button, Modal } from 'react-bootstrap';
import GuestNavbar from './GuestNavbar';

const LoginForm = props =>{
    const { register, handleSubmit, errors} = useForm();

    const [show, setShow] = useState(false);

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

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
  
    return(
      <>
        <GuestNavbar />
        <FormDiv>
            <h2 className='form-title'>Lager-In</h2>
            <form className='login-user' onSubmit={handleSubmit(handleShow)}>
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
    );
};

const mapPropsToState = state =>{
    return{
        isPosting: state.isPosting,
        error: state.error
    };
};

export default connect(mapPropsToState, { handleLogin })(LoginForm)