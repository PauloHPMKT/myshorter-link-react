import { api } from './api';

export default {
  createShortenLink: (url) => {
    console.log(url);
    return api.post('/shorten', url);
  },
};
