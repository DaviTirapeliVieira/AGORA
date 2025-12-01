import api from '@/app/interceptor';

export const GradesApi = {
  getGrades: async () => {
    try {
      const { data } = await api.get('/grades');
      return data;
    } catch (error) {
      console.error('Erro ao buscar notas:', error);
      throw error;
    }
  },
  searchGrades: async filters => {
    const { data } = await api.post('/grades/search', filters);
    return data;
  },
  saveGrades: async notas => {
    try {
      const { data } = await api.post('/grades', notas);
      return data;
    } catch (error) {
      console.error('Erro ao salvar notas:', error);
      throw error;
    }
  },
};
