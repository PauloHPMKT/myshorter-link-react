import axios from 'axios';

export const key = process.env.REACT_APP_BITLY_KEY;
const baseURL = process.env.REACT_APP_BITLY_URL;

export const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${key}`,
  },
});
