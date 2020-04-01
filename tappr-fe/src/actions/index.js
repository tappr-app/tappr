import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth";

// General Actions
export const SET_ERROR = 'SET_ERROR';

// Register Actions
export const POST_USER = 'POST_USER'
export const USER_CREATED = 'USER_CREATED';

// Login Actions
export const USER_LOGIN = 'USER_LOGIN';
export const LOGGED_IN= 'LOGGED_IN';

// User Data Actions
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE';
export const ADD_MY_BREWS = 'ADD_MY_BREWS';
export const ADD_MY_BREWS_SUCCESS = 'ADD_MY_BREWS_SUCCESS';
export const ADD_MY_BREWS_FAILURE = 'ADD_MY_BREWS_FAILURE';


// Fetch Beer Actions
export const GET_API_BEERS = 'GET_API_BEERS';
export const GET_API_BEERS_SUCCESS = 'GET_API_BEERS_SUCCESS';
export const GET_API_BEERS_FAILURE = 'GET_API_BEERS_FAILURE';

// Beer CRUD Actions
export const ADD_BEER = 'ADD_BEER';
export const ADD_BEER_SUCCESS = 'ADD_BEER_SUCCESS';
export const ADD_BEER_FAILURE = 'ADD_BEER_FAILURE';
export const UPDATE_BEER = 'UPDATE_BEER';
export const UPDATE_BEER_SUCCESS = 'UPDATE_BEER_SUCCESS';
export const UPDATE_BEER_FAILURE = 'UPDATE_BEER_FAILURE';

export const handlePostData = payload => dispatch => {
  dispatch({ type: POST_USER });
  axiosWithAuth()
    .post('/auth/register', payload)
    .then(res => {
        console.log('POST', res);
        dispatch({ type: USER_CREATED })
        localStorage.setItem('token', JSON.stringify(res.data.token))
        window.localStorage.setItem('user_id', res.data.user.id);
        window.localStorage.setItem('user_username', res.data.user.username);
        window.localStorage.setItem('token', res.data.token);
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

export const getProfile = id => dispatch =>{
  dispatch({type: GET_USER_DATA});
  axiosWithAuth()
  .get(`/users/${id}`)
  .then(res=>{
    console.log('user profile', res);
    dispatch({type: GET_USER_DATA_SUCCESS, payload: res.data})
  })
  .catch(error => {
    dispatch({ type: GET_USER_DATA_FAILURE, payload: error.message });
  });
}



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

// adding to the brew takes an id and payload as an arg!
export const addMyBrews = (id, payload) => dispatch =>{
  dispatch({type: ADD_MY_BREWS});
  // grabs the user data from api
  getProfile(id)
  // then posts the data
  axiosWithAuth().post('/users/beers', payload)
  .then(res => {
    console.log(res);
    dispatch({ type: ADD_MY_BREWS_SUCCESS, payload: res.data });
  })
  .catch(error => {
    console.log(error);
    dispatch({ type: ADD_MY_BREWS_FAILURE, payload: error.message });
  });
}


export const addBeer = (newBeer) => dispatch => {
  dispatch({ type: ADD_BEER });
  axiosWithAuth().post('/beers', newBeer)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_BEER_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ADD_BEER_FAILURE, payload: error.message });
    });
};

export const updateBeer = (updatedBeer) => dispatch => {
  dispatch({ type: UPDATE_BEER });
  axiosWithAuth().put(`/beers/${updatedBeer.id}`, updatedBeer)
    .then(res => {
      dispatch({ type: UPDATE_BEER_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: UPDATE_BEER_FAILURE, payload: error.message });
    })
};