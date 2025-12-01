import api from '@/app/interceptor';

export const UserApi = {
  createUser: async (data) => {
    const response = await api.post('/users', data);
    return response.data.payload;
  },
  fetchAllUsers: async () => {
    const response = await api.get('/users');
    return response.data.payload;
  },
  fetchUserById: async (userId) => {
    const response = await api.get(`/users/${userId}`);
    return response.data.payload;
  },
  deleteUserById: async userId => {
    const response = await api.delete(`/users/${userId}`);
    return response.data.payload;
  },
};
