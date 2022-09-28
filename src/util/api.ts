import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {KEY_USER} from '../../src/constants/keys';

import store from '../../src/store';

const api = axios.create({
  baseURL: 'http://192.168.1.190:8000/api/',
});

api.interceptors.request.use(
  async function (config) {
    let token = store.getState().authReducer?.userDetails?.token;

    if (!token) {
      const user = await AsyncStorage.getItem(KEY_USER);
      if (user) {
        token = JSON.parse(user).token;
      }
    }

    if (token && config.headers && !config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    console.log(
      '>>> Request',
      config.method,
      `${config.baseURL}${config.url}\n`,
      token,
      config.data,
    );

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    console.log(
      '*** Response',
      `${response.config.baseURL}${response.config.url}\n`,
      response.data,
    );

    return response;
  },
  function (error) {
    console.error(
      '@@@',
      error?.response?.request?.responseURL,
      error,
      error?.response?.data,
    );

    return Promise.reject(error);
  },
);

export default api;
