import axios from 'axios';

const api = axios.create({
    baseURL: 'https://test.local'
});

export default api;
