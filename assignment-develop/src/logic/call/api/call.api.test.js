const mockDatabase = {
  1: {
    alunos: [
      {
        id: 1,
        foto: '/icon-user.png',
        nome: 'Ana Souza',
        idade: 16,
        matricula: '12345',
        email: 'ana.souza@example.com',
        serie: '2º ano',
        observacoes: 'Nenhuma observação.',
      },
      {
        id: 2,
        foto: '/icon-user.png',
        nome: 'Bruno Silva',
        idade: 17,
        matricula: '12346',
        email: 'bruno.silva@example.com',
        serie: '2º ano',
        observacoes: 'Nenhuma observação.',
      },
      {
        id: 3,
        foto: '/icon-user.png',
        nome: 'Carla Ribeiro',
        idade: 15,
        matricula: '12347',
        email: 'carla.ribeiro@example.com',
        serie: '2º ano',
        observacoes: 'Nenhuma observação.',
      },
      {
        id: 4,
        foto: '/icon-user.png',
        nome: 'Diego Martins',
        idade: 16,
        matricula: '12348',
        email: 'diego.martins@example.com',
        serie: '2º ano',
        observacoes: 'Nenhuma observação.',
      },
    ],
    numAulas: 2,
  },

  2: {
    alunos: [
      {
        id: 10,
        nome: 'Gabriel Freitas',
        foto: '/icon-user.png',
        idade: 16,
        matricula: '99871',
        email: 'gabriel.freitas@example.com',
        serie: '3º ano',
        observacoes: 'Nenhuma',
      },
      {
        id: 11,
        nome: 'Roberta Silva',
        foto: '/icon-user.png',
        idade: 17,
        matricula: '99872',
        email: 'roberta.silva@example.com',
        serie: '3º ano',
        observacoes: 'Boa aluna',
      },
    ],
    numAulas: 4,
  },

  3: {
    alunos: [
      { id: 20, nome: 'Pedro Moura', foto: '/icon-user.png' },
      { id: 21, nome: 'Luana Godoy', foto: '/icon-user.png' },
      { id: 22, nome: 'Caio Ramos', foto: '/icon-user.png' },
    ],
    numAulas: 5,
  },
};

export const fetchCallApi = async classId => {
  console.log(`[MOCK] Buscando chamada da aula ID: ${classId}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = mockDatabase[classId];

      if (!data) {
        reject({
          response: {
            data: { message: 'Aula não encontrada' },
          },
        });
        return;
      }

      resolve(data);
    }, 600);
  });
};

export const saveCallApi = async ({ classId, presenca }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('📌 Salvando chamada no backend MOCK:');
      console.log('Aula:', classId);
      console.log('Presença:', presenca);

      resolve({ success: true });
    }, 500);
  });
};
