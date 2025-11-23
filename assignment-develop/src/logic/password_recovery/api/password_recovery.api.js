import api from '@/app/interceptor';

export const sendResetLink = async (email) => {
  try {
    const { data } = await api.post("/password-reset", { email });
    return data;
  } catch (error) {
    console.error("Erro ao enviar link de redefinição:", error);
    throw error;
  }
};
