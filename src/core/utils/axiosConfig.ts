import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'https://swapi.py4e.com/api',
});