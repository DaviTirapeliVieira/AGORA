import api from '@/app/interceptor';

export const getCall = async () => {
  try {
    const { data } = await api.get("/call");
    return data;
  } catch (error) {
    console.error("Erro ao buscar chamada:", error);
    throw error;
  }
};

export const saveCall = async (chamada) => {
  try {
    const { data } = await api.post("/call", chamada);
    return data;
  } catch (error) {
    console.error("Erro ao salvar chamada:", error);
    throw error;
  }
};
