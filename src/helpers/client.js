import axios from 'axios';
import { cookie } from '@/helpers/cookie';

const axiosConfig = {
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosClient = axios.create(axiosConfig);

const request = async (
  method,
  path,
  params = null,
  data = null,
  config = null
) => {
  config = {
    method,
    url: path,
    params,
    data,
    ...config,
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
  get: async (path, params = null) => await request('GET', path, params, null),
  post: async (path, data = null) => await request('POST', path, null, data),
  put: async (path, data = null) => await request('PUT', path, null, data),
  delete: async (path, data = null) => await request('DELETE', path, null, data),
};

export default client;
