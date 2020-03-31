import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth";

// General Actions
export const SET_ERROR = 'SET_ERROR'

// Register Actions
export const POST_USER = 'POST_USER'
export const USER_CREATED = 'USER_CREATED'

// Login Actions
export const USER_LOGIN = 'USER_LOGIN'
export const LOGGED_IN= 'LOGGED_IN'

// Fetch Beer Actions
export const GET_API_BEERS = 'GET_API_BEERS';
export const GET_API_BEERS_SUCCESS = 'GET_API_BEERS_SUCCESS';
export const GET_API_BEERS_FAILURE = 'GET_API_BEERS_FAILURE';

// Beer CRUD Actions
export const ADD_BEER = 'ADD_BEER';
export const ADD_BEER_SUCCESS = 'ADD_BEER_SUCCESS';
export const ADD_BEER_FAILURE = 'ADD_BEER_FAILURE';

export const handlePostData = payload => dispatch => {
  dispatch({ type: POST_USER });
  axiosWithAuth()
    .post('/auth/register', payload)
    .then(res => {
        console.log('POST', res);
        dispatch({ type: USER_CREATED })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: SET_ERROR, payload: 'Party foul! Action wasn\'t completed' })
    });
};

export const handleLogin = credentials => dispatch =>{
    dispatch({type: USER_LOGIN});
    axios.post('https://tappr-app-api.herokuapp.com/api/auth/login', credentials)
    .then(res=>{
        console.log('LOGIN', res)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        window.localStorage.setItem('user_id', res.data.user.id);
        window.localStorage.setItem('user_username', res.data.user.username);
        window.localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGGED_IN});
    })
    .catch(err=>{
        console.log(err)
        dispatch({ type: SET_ERROR, payload: 'Party foul! Action wasn\'t completed' })
    });
};

export const getPunkBeers = () => dispatch => {
  dispatch({ type: GET_API_BEERS });
  axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      dispatch({ type: GET_API_BEERS_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: GET_API_BEERS_FAILURE, payload: error.message });
    });

};

export const addBeer = (newBeer) => dispatch => {
  dispatch({ type: ADD_BEER });
  axiosWithAuth().post('/users/beers', newBeer)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_BEER_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ADD_BEER_FAILURE, payload: error.message });
    });
};