import axios from 'axios';

export const key = process.env.REACT_APP_BITLY_KEY;

export const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    Authorization: `Bearer ${key}`,
  },
});
