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

export const refresh = (id) => API.patch('/outfits/refresh', id); // id is of type string in a the req body
export const update = (outfitType, clothesId, userId, day) => API.patch(`/outfits/update`, { outfitType, clothesId, userId, day }); // all are of type string (outfitType is top/bottom/full) (day is M/Tu/W/Th/F/Sa/Su)
