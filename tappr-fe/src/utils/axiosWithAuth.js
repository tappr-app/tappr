import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token)
    return axios.create({
        baseURL: 'https://tappr-app-api.herokuapp.com/api',
        headers:{
            Authorization: token
        }
    })
}