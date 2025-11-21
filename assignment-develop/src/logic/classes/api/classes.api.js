import api from '@/app/interceptor';

export const getClasses = async () => {
  try {
    const { data } = await api.get("/classes");
    return data;
  } catch (error) {
    console.error("Erro ao buscar as classes do dia:", error);
    throw error;
  }
};
