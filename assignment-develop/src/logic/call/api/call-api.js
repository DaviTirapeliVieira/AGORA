import api from '@/app/interceptor';

export const CallApi = {
  getCall: async () => {
    try {
      const { data } = await api.get('/call');
      return data;
    } catch (error) {
      console.error('Erro ao buscar chamada:', error);
      throw error;
    }
  },
  saveCal: async chamada => {
    try {
      const { data } = await api.post('/call', chamada);
      return data;
    } catch (error) {
      console.error('Erro ao salvar chamada:', error);
      throw error;
    }
  },
};
