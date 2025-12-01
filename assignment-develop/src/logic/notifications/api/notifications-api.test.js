export const fetchNotificationsTest = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const notifications = [
        {
          id: '1',
          title: 'Bem-vindo ao sistema!',
          time: 'Agora',
        },
        {
          id: '2',
          title: 'Sua senha foi alterada com sucesso.',
          time: '2 horas atrás',
        },
        {
          id: '3',
          title: 'Novo aviso do professor de Matemática.',
          time: 'Ontem',
        },
        {
          id: '4',
          title: 'Lembrete: Reunião de pais na próxima semana.',
          time: '3 dias atrás',
        },
        {
          id: '5',
          title: 'Atualização implementada.',
          time: '1 semana atrás',
        },
        {
          id: '6',
          title: 'Nova mensagem do professor de História.',
          time: '2 semanas atrás',
        },
      ];

      resolve(notifications);
    }, 1000); // simula 1s de delay de rede
  });
};
