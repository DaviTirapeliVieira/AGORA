const navigationConfig = [
  {
    path: '/generator',
    label: 'Generator',
    roles: ['admin'],
  },
  {
    path: '/users',
    label: 'Users',
    roles: ['admin', 'secretary', 'teacher', 'student'],
    children: [
      {
        path: '',
        label: 'User List',
        roles: ['admin', 'secretary'],
      },
      {
        path: '/create',
        label: 'Create User',
        roles: ['admin', 'secretary'],
      },
      {
        path: '/createDiscipline',
        label: 'Create Discipline',
        roles: ['admin', 'secretary'],
      },
      {
        path: '/bulletin',
        label: 'Boletim',
        roles: ['student'],
      },
      {
        path: '/attendance',
        label: 'Attendance',
        roles: ['student'],
      },
    ],
  },
  {
    path: '/operations',
    label: 'Operations',
    roles: ['admin', 'secretary', 'teacher', 'student'],
    children: [
      {
        path: '/grades',
        label: 'Grades',
        roles: ['admin', 'secretary', 'teacher'],
      },
      {
        path: '/calendar',
        label: 'Calendar',
        roles: ['admin', 'secretary', 'teacher', 'student'],
      },
    ],
  },
];

export default navigationConfig;
