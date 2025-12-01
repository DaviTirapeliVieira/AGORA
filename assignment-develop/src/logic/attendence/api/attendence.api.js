import api from '@/app/interceptor';

export const AttendanceApi = {
  getAnos: async () => {
    const res = await api.get(`/frequencia/anos`);
    return res.data;
  },

  getFrequencia: async ano => {
    const res = await api.get(`/frequencia?ano=${ano}`);
    return res.data;
  },
};
