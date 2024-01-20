import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); 

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    } 
    return req;
});

export const logIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchUser = (id) => API.get(`/user/profile/${id}`);

// export const createList = (newList) => API.post(`/list/createList`, newList);
export const addTop = (image) => API.post(`/wardrobe/addTop`, image);