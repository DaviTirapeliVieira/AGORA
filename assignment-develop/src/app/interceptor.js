// src/app/interceptor.js
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { logout } from '@/logic/authentication/ducks/auth-slice';

const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const showNotification = (message, variant) => {
  enqueueSnackbar(message, { variant });
};

export const setUpInterceptors = store => {
  api.interceptors.request.use(
    config => {
      const {
        auth: { token },
      } = store.getState();
      if (token) {
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        };
      }
      return config;
    },
    error => {
      showNotification('Request error', 'error');
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    response => {
      const message = response.data.message || 'Request successful';
      showNotification(message, 'success');
      return response;
    },
    error => {
      const { response } = error;
      const message = response?.data?.message || 'An error occurred';

      if (response) {
        switch (response.status) {
          case 400:
            showNotification(message, 'warning');
            break;
          case 401:
            if (!response.config.url.startsWith('auth')) {
              showNotification('Unauthorized - Logging out', 'error');
              store.dispatch(logout());
              window.location.href = '/login';
            } else {
              showNotification(message, 'error');
            }
            break;
          case 404:
            showNotification(message, 'error');
            break;
          case 500:
          default:
            showNotification(message, 'error');
            break;
        }
      } else {
        showNotification('Network error', 'error');
      }

      return Promise.reject(error);
    },
  );
};

export default api;
