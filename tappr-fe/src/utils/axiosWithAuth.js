import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token)
    return axios.create({
        baseURL: '',
        headers:{
            Authorization: token
        }
    })
}