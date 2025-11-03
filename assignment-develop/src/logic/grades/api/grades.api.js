import api from '@/app/interceptor';

export const getGrades = async () => {
  try {
    const { data } = await api.get("/grades");
    return data;
  } catch (error) {
    console.error("Erro ao buscar notas:", error);
    throw error;
  }
};

export const saveGrades = async (notas) => {
  try {
    const { data } = await api.post("/grades", notas);
    return data;
  } catch (error) {
    console.error("Erro ao salvar notas:", error);
    throw error;
  }
};
