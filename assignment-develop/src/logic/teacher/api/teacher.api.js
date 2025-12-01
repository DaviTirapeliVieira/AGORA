import api from '@/app/interceptor';

export const fetchTeachersApi = {
  getTeacher: async () => {
    const response = await api.get('/teachers');
    return response.data.payload;
  },
};
