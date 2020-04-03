import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { bindActionCreators } from 'redux';

// General Actions
export const SET_ERROR = 'SET_ERROR';

// Register Actions
export const POST_USER = 'POST_USER';
export const USER_CREATED = 'USER_CREATED';

// Login Actions
export const USER_LOGIN = 'USER_LOGIN';
export const LOGGED_IN= 'LOGGED_IN';

// User Data Actions
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE';

export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS';
export const UPDATE_USER_DATA_FAILURE = 'UPDATE_USER_DATA_FAILURE';

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


// Beer Details CRUD
export const ADD_PAIRING = 'ADD_PAIRING';
export const ADD_PAIRING_SUCCESS = 'ADD_PAIRING_SUCCESS';
export const ADD_PAIRING_FAILURE = 'ADD_PAIRING_FAILURE';

export const UPDATE_FOOD_PAIRING = 'UPDATE_FOOD_PAIRING';
export const UPDATE_FOOD_PAIRING_SUCCESS = 'UPDATE_FOOD_PAIRING_SUCCESS';
export const UPDATE_FOOD_PAIRING_FAILURE = 'UPDATE_FOOD_PAIRING_FAILURE';

export const DELETE_FOOD_PAIRING = 'DELETE_FOOD_PAIRING';
export const DELETE_FOOD_PAIRING_SUCCESS = 'DELETE_FOOD_PAIRING_SUCCESS';
export const DELETE_FOOD_PAIRING_FAILURE = 'DELETE_FOOD_PAIRING_FAILURE';

export const ADD_BEER_COMMENT = 'ADD_BEER_COMMENT';
export const ADD_BEER_COMMENT_SUCCESS = 'ADD_BEER_COMMENT_SUCCESS';
export const ADD_BEER_COMMENT_FAILURE = 'ADD_BEER_COMMENT_FAILURE';

export const DELETE_BEER_COMMENT = 'DELETE_BEER_COMMENT';
export const DELETE_BEER_COMMENT_SUCCESS = 'DELETE_BEER_COMMENT_SUCCESS';
export const DELETE_BEER_COMMENT_FAILURE = 'DELETE_BEER_COMMENT_FAILURE';

export const UPDATE_BEER_COMMENT = 'UPDATE_BEER_COMMENT';
export const UPDATE_BEER_COMMENT_SUCCESS = 'UPDATE_BEER_COMMENT_SUCCESS';
export const UPDATE_BEER_COMMENT_FAILURE = 'UPDATE_BEER_COMMENT_FAILURE';

export const handlePostData = payload => dispatch => {
  dispatch({ type: POST_USER });
  axiosWithAuth()
    .post('/auth/register', payload)
    .then(res => {
        dispatch({ type: USER_CREATED });
        window.localStorage.setItem('user_id', res.data.user.id);
        window.localStorage.setItem('user_username', res.data.user.username);
        window.localStorage.setItem('token', res.data.token);
    })
    .catch(err => {
        dispatch({ type: SET_ERROR, payload: 'Party foul! Action wasn\'t completed' })
    });
};

export const handleLogin = credentials => dispatch =>{
    dispatch({type: USER_LOGIN});
    axios.post('https://tappr-app-api.herokuapp.com/api/auth/login', credentials)
      .then(res=>{
          dispatch({ type: LOGGED_IN});
          window.localStorage.setItem('user_id', res.data.user.id);
          window.localStorage.setItem('user_username', res.data.user.username);
          window.localStorage.setItem('token', res.data.token);
      })
      .catch(err=>{
          dispatch({ type: SET_ERROR, payload: 'Party foul! Action wasn\'t completed' })
      });
};

export const getProfile = id => dispatch =>{
  dispatch({type: GET_USER_DATA});
  axiosWithAuth()
    .get(`/users/${id}`)
    .then(res=>{
      dispatch({type: GET_USER_DATA_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({ type: GET_USER_DATA_FAILURE, payload: error.message });
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

// adding to the brew takes an id and payload as an arg!
export const addMyBrews = (payload) => dispatch =>{
  dispatch({type: ADD_MY_BREWS});
  // DEVS, THE SAVEBEER SENDS WHAT THE BE ACCEPTS, KEEP IN MIND WHEN ALTERING
  const saveBeer = {
    name: payload.name,
    tagline: payload.tagline,
    description: payload.description,
    image_url: payload.image_url,
    abv: payload.abv
  }
  axiosWithAuth().post('/users/beers', saveBeer)
    .then(res => {
      dispatch({ type: ADD_MY_BREWS_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_MY_BREWS_FAILURE, payload: error.message });
    });
};

export const addBeer = (newBeer) => dispatch => {
  dispatch({ type: ADD_BEER });
  axiosWithAuth().post('/beers', newBeer)
    .then(res => {
      dispatch({ type: ADD_BEER_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_BEER_FAILURE, payload: error.message });
    });
};

export const addPairing = (id, entry) => dispatch => {
  dispatch({ type: ADD_PAIRING });
  axiosWithAuth().post(`/beers/${id}/foods`, entry)
    .then(res => {
      dispatch({ type: ADD_PAIRING_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_PAIRING_FAILURE, payload: error.message });
    });
};

export const updateFoodPairing = (beerId, updatedPairing) => dispatch => {
  dispatch({ type: UPDATE_FOOD_PAIRING });
  axiosWithAuth().put(`/beers/${beerId}/foods/${updatedPairing.id}`, updatedPairing)
    .then(res => {
      dispatch({ type: UPDATE_FOOD_PAIRING_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: UPDATE_FOOD_PAIRING_FAILURE, payload: error.message });
    });
};

export const deleteFoodPairing = (beerId, pairing) => dispatch => {
  dispatch({type: DELETE_FOOD_PAIRING});
  axiosWithAuth().delete(`/beers/${beerId}/foods/${pairing.id}`)
  .then(res=>{
    dispatch({type: DELETE_FOOD_PAIRING_SUCCESS, payload: res.data})
  })
  .catch(error => {
    dispatch({ type: DELETE_FOOD_PAIRING_FAILURE, payload: error.message });
  });
};

export const addBeerComment = (payload) => dispatch => {
  dispatch({ type: ADD_BEER_COMMENT });
  const commentData = {
    comment: payload.comment,
    beer_id: payload.beer_id,
    user_id: payload.user_id
  }
  axiosWithAuth().post(`/beers/${payload.beer_id}/comments`, commentData)
    .then(res => {
      dispatch({ type: ADD_BEER_COMMENT_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_BEER_COMMENT_FAILURE, payload: error.message });
    });
};

export const updateBeerComment = (beerId, updatedBeerComment) => dispatch => {
  dispatch({ type: UPDATE_BEER_COMMENT });
  axiosWithAuth().put(`/beers/${beerId}/comments/${updatedBeerComment.id}`, updatedBeerComment)
    .then(res => {
      dispatch({ type: UPDATE_BEER_COMMENT_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: UPDATE_BEER_COMMENT_FAILURE, payload: error.message });
    });
};

export const deleteBeerComment = (beerId, comment) => dispatch => {
  dispatch({type: DELETE_BEER_COMMENT});
  axiosWithAuth().delete(`/beers/${beerId}/comments/${comment.id}`)
  .then(res=>{
    dispatch({type: DELETE_BEER_COMMENT_SUCCESS, payload: res.data})
  })
  .catch(error => {
    dispatch({ type: DELETE_BEER_COMMENT_FAILURE, payload: error.message });
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
    });
};

export const updateUser = (updatedUser) => dispatch => {
  dispatch({ type: UPDATE_USER_DATA });
  axiosWithAuth().put(`users/${updatedUser.id}`, updatedUser)
    .then(res => {
      dispatch({ type: UPDATE_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: UPDATE_USER_DATA_FAILURE, payload: error.message });
    });
};