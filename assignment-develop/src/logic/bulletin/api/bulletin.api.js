import api from '@/app/interceptor';

export const BulletinApi = {
  getAnos: async () => {
    const res = await api.get(`/boletim/anos`);
    return res.data;
  },
  getBoletim: async (ano) => {
    const res = await api.get(`/boletim?ano=${ano}`);
    return res.data;
  },
  sendBoletimEmail: async () => {
    const res = await api.post(`/boletim/enviar-email`);
    return res.data;
  }
};
