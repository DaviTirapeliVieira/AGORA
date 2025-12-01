import api from '@/app/interceptor';

export const createDisciplineAPI = {
  create: async payload => {
    const response = await api.post('/disciplines', payload);
    return response.data.payload;
  },
};
