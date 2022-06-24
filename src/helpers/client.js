import axios from 'axios';
import { cookie } from '@/helpers/cookie';

const axiosConfig = {
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosClient = axios.create(axiosConfig);

const request = async (method, url, params, data) => {
  config = {
    method,
    url,
    params,
    data,
    headers: authHeader(cookie.get('Token'))
  };
  const response = await axiosClient.request(config);
  return response.data;
};

const authHeader = (authToken) => {
  if (authToken) {
    return { Authorization: authToken }
  } else {
    return {}
  }
}

const client = {
  get: async (url, params = null) => await request('GET', url, params, null),
  post: async (url, data = null) => await request('POST', url, null, data),
  put: async (url, data = null) => await request('PUT', url, null, data),
  delete: async (url, data = null) => await request('DELETE', url, null, data),
};

export default client;
