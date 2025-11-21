import api from '@/app/interceptor';

export const CalendarApi = {
  getEvents: async () => {
    try {
      const { data } = await api.get("/events");
      return data;
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      throw error;
    }
  },
  // addEvent: async (event) => {
  //   try {
  //     const { data } = await api.post("/events", event);
  //     return data;
  //   } catch (error) {
  //     console.error("Erro ao adicionar evento:", error);
  //     throw error;
  //   }
  // }
};
