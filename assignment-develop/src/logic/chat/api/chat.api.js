import api from "@/app/interceptor";

export default async function chatApi(message) {
  try {
    const { data } = await api.post("/chat", { message });
    return data;
  } catch (error) {
    console.error("Erro ao comunicar com o sistema:", error);
    throw new Error(
      error.response?.data?.message || "Falha na comunicação com o sistema"
    );
  }
}
