import { axiosWithAuth } from "../utils/axiosWithAuth";

export const POST_USER = 'POST_USER'


export const handlePostData = payload => dispatch => {
    dispatch({type: POST_USER});
    axiosWithAuth()
    .post('/auth/register', payload)
    .then(res=>{
        console.log('POST', res)
    })
    .catch(err=> console.log(console.log(err)
    ))

}

export const handleLogin = credentials => dispatch =>{
    dispatch({type: USER_LOGIN});
    axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res=>{
        console.log('LOGIN', res)
    })
    .catch(err=> console.log(err))
}