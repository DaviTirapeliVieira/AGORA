import api from '@/app/interceptor';

const notificationsApi = async (endpoint, method, data) => {
  const response = await api({
    url: endpoint,
    method: method,
    data: data
  });
  return response.data;
};

export default notificationsApi;
