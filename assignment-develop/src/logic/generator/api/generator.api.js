import api from "@/app/interceptor";

const generatorApi = {
  sendMessage: async (message) => {
    try {
      const { data } = await api.post("/chat", { message });
      return data;
    } catch (error) {
      console.error("Erro ao comunicar com o sistema:", error);
      throw new Error(
        error.response?.data?.message || "Falha na comunicação com o sistema"
      );
    }
  },

  gerarPasta: async () => {
    try {
      const { data } = await api.get("/gerar-pasta");
      return data;
    } catch (error) {
      console.error("Erro ao gerar pasta:", error);
      throw new Error(
        error.response?.data?.message || "Falha ao gerar pasta"
      );
    }
  },
};

export default generatorApi;
