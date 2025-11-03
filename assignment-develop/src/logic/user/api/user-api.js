import api from '@/app/interceptor';

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

export { fetchAllUsers, fetchUserById, deleteUserById };
