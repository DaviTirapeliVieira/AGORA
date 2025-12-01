import api from '@/app/interceptor';

export const ClassesApi = {
  getClasses: async (userId, role) => {
    try {
      let url = '/classes';

      if (role === 'teacher') url += `?teacherId=${userId}`;
      if (role === 'student') url += `?studentId=${userId}`;

      const { data } = await api.get(url);
      return data;
    } catch (error) {
      console.error('Erro ao buscar as classes do dia:', error);
      throw error;
    }
  },
};
