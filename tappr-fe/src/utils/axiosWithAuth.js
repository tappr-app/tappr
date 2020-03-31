import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://tappr-app-api.herokuapp.com/api',
        headers:{
            Authorization: token
        }
    })
}