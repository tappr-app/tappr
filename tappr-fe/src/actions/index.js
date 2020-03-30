import { axiosWithAuth } from "../utils/axiosWithAuth";

export const POST_USER = 'POST_USER'


export const handlePostData = payload => dispatch => {
    dispatch({type: POST_USER});
    axiosWithAuth()
    .post('/auth/register', payload)
    .then(res=>{
        console.log('POST', res)
    })

}