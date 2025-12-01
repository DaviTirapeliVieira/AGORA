import api from '@/app/interceptor';

export const notificationsApi = {
  getNotification: async (endpoint, method, data) => {
    const response = await api.get({
      url: endpoint,
      method: method,
      data: data,
    });
    return response.data;
  },
};
