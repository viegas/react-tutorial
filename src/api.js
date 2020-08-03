import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http')

const api = axios.create({
    baseURL: 'http://localhost:8978/',
});

export default api;
