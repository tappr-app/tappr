import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const POST_USER = 'POST_USER';

export const GET_API_BEERS = 'GET_API_BEERS';
export const GET_API_BEERS_SUCCESS = 'GET_API_BEERS_SUCCESS';
export const GET_API_BEERS_FAILURE = 'GET_API_BEERS_FAILURE';

export const handlePostData = payload => dispatch => {
    dispatch({type: POST_USER});
    axiosWithAuth()
    .post('/auth/register', payload)
    .then(res=>{
        console.log('POST', res);
        window.localStorage.setItem('user_id', res.data.user.id);
        window.localStorage.setItem('user_username', res.data.user.username);
        window.localStorage.setItem('token', res.data.token);
    })
    .catch(error => {
      console.log(error);
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
}