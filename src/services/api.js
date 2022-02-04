import axios from 'axios';

export const key = 'a0ee0dfccca7228da50a76644d16f0d35febc0c5';

export const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    Authorization: `Bearer ${key}`,
  },
});
