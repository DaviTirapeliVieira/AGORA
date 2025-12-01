export const fetchAttendanceAnosApi = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        payload: [2023, 2024, 2025],
      });
    }, 600);
  });
};

export const fetchAttendanceFrequenciaApi = async ano => {
  return new Promise(resolve => {
    setTimeout(() => {
      const fakeData = {
        2023: [
          { id: 1, nome: 'Matemática', frequencia: 80 },
          { id: 2, nome: 'Português', frequencia: 72 },
          { id: 3, nome: 'História', frequencia: 90 },
        ],
        2024: [
          { id: 4, nome: 'Matemática', frequencia: 60 },
          { id: 5, nome: 'Física', frequencia: 95 },
          { id: 6, nome: 'Química', frequencia: 88 },
        ],
        2025: [
          { id: 7, nome: 'Biologia', frequencia: 100 },
          { id: 8, nome: 'Artes', frequencia: 70 },
        ],
      };

      resolve({
        payload: {
          ano,
          items: fakeData[ano] || [],
        },
      });
    }, 700);
  });
};
