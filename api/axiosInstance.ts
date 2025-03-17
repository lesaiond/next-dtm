import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.grandtest.uz/api', // базовый URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
