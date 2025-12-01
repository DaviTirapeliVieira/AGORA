// classes.api.test.js

// Banco mockado de aulas do dia
const mockClassesDB = [
  {
    id: '1',
    teacherId: 1, // Davi
    group: 'Turma A',
    subject: 'Matemática',
    startTime: '08:00',
    endTime: '09:30',
    room: 'Sala 101',
  },
  {
    id: '2',
    teacherId: 1, // Davi
    group: 'Turma B',
    subject: 'QTS',
    startTime: '09:45',
    endTime: '11:15',
    room: 'Laboratório 2',
  },
  {
    id: '3',
    teacherId: 2, // Luis
    group: 'Turma A',
    subject: 'Química',
    startTime: '13:00',
    endTime: '14:30',
    room: 'Sala 203',
  },
  {
    id: '4',
    teacherId: 2, // Luis
    group: 'Turma B',
    subject: 'História',
    startTime: '14:45',
    endTime: '16:15',
    room: 'Sala 204',
  },
  {
    id: '5',
    teacherId: 3, // outro professor
    group: 'Turma B',
    subject: 'Geografia',
    startTime: '16:30',
    endTime: '18:00',
    room: 'Sala 205',
  },
];

// mapa aluno → ids de aulas em que ele está matriculado
const mockStudentClasses = {
  100: ['1', '3'], // aluno id 100 vai ter aula 1 e 3 hoje
  101: ['2'], // aluno id 101 só aula 2
  102: ['4', '5'], // etc...
};

export const fetchTodayClassesApi = async (userId, role) => {
  console.log('Buscando aulas para:', { userId, role });

  return new Promise(resolve => {
    setTimeout(() => {
      // TEACHER → só as aulas dele
      if (role === 'teacher') {
        const classes = mockClassesDB.filter(c => c.teacherId === userId);
        return resolve(classes);
      }

      // STUDENT → só as aulas em que ele está matriculado
      if (role === 'student') {
        const classIds = mockStudentClasses[userId] ?? [];
        const classes = mockClassesDB.filter(c => classIds.includes(c.id));
        return resolve(classes);
      }

      // SECRETARY / ADMIN → todas as aulas
      if (role === 'secretary' || role === 'admin') {
        return resolve(mockClassesDB);
      }

      // fallback: nenhum papel reconhecido → nenhuma aula
      resolve([]);
    }, 400);
  });
};
