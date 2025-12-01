const boletimFakeData = {
  2023: [
    {
      id: 1,
      nome: 'Matemática',
      s1: 'B',
      s2: 'R',
      s3: 'B',
      s4: 'MB',
      freq: 90,
    },
    {
      id: 2,
      nome: 'Português',
      s1: 'B',
      s2: 'B',
      s3: 'MB',
      s4: 'MB',
      freq: 88,
    },
    {
      id: 3,
      nome: 'História',
      s1: 'R',
      s2: 'R',
      s3: 'B',
      s4: 'B',
      freq: 90,
    },
  ],

  2024: [
    {
      id: 4,
      nome: 'Matemática',
      s1: 'B',
      s2: 'R',
      s3: 'B',
      s4: 'MB',
      freq: 86,
    },
    {
      id: 5,
      nome: 'Geografia',
      s1: 'B',
      s2: 'B',
      s3: 'B',
      s4: 'B',
      freq: 98,
    },
  ],

  2025: [
    {
      id: 6,
      nome: 'Biologia',
      s1: 'R',
      s2: 'R',
      s3: 'R',
      s4: 'R',
      freq: 96,
    },
    {
      id: 7,
      nome: 'Física',
      s1: 'B',
      s2: 'R',
      s3: 'B',
      s4: 'B',
      freq: 85,
    },
  ],
};

export const fetchBoletimAnosApi = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        payload: [2023, 2024, 2025],
      });
    }, 600);
  });
};

export const fetchBoletimApi = async ano => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        payload: {
          ano,
          items: boletimFakeData[ano] || [],
        },
      });
    }, 700);
  });
};

export const sendBoletimEmailApi = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('📧 Boletim enviado para o email (fake)');
      resolve({ success: true });
    }, 900);
  });
};
