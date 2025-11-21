import api from '@/app/interceptor';

const createUserApi = async data => {
  const response = await api.post('/users', data);
  return response.data.payload;
};

const fetchAllUsers = async () => {
  const response = await api.get('/users');
  return response.data.payload;
};

const fetchUserById = async userId => {
  const response = await api.get(`/users/${userId}`);
  return response.data.payload;
};

const deleteUserById = async userId => {
  const response = await api.delete(`/users/${userId}`);
  return response.data.payload;
};

export { createUserApi, fetchAllUsers, fetchUserById, deleteUserById };
