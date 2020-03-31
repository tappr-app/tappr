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


export const handlePostData = payload => dispatch => {
    dispatch({type: POST_USER});
    axiosWithAuth()
    .post('/auth/register', payload)
    .then(res=>{
        console.log('POST', res);
        dispatch({ type: USER_CREATED})
    })
    .catch(err=>{
        console.log(err)
        dispatch({ type: SET_ERROR, payload: 'Party foul! Action wasn\'t completed' })
    } 
    )

}

export const handleLogin = credentials => dispatch =>{
    dispatch({type: USER_LOGIN});
    axios.post('https://tappr-app-api.herokuapp.com/api/auth/login', credentials)
    .then(res=>{
        console.log('LOGIN', res)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        dispatch({ type: LOGGED_IN})
    })
    .catch(err=>{
        console.log(err)
        dispatch({ type: SET_ERROR, payload: 'Party foul! Action wasn\'t completed' })
    })
}