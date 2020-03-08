import axios from 'axios';

import { errorNotification } from '../../commonComponents/Toastify';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 422) {
      error.response.data.errors.forEach(err => {
        errorNotification(err.message);
      });
    } else {
      errorNotification('Something went wrong');
    }
  },
);

export default axiosInstance;
