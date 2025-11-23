const navigationConfig = [
  {
    path: '/generator',
    label: 'Generator',
  },
  {
    path: '/users',
    label: 'User',
    children: [
      {
        path: '/',
        label: 'User List',
      },
      {
        path: '/create',
        label: 'Create User',
      },
    ],
  },
  {
    path: '/operations',
    label: 'Operations',
    children: [
      {
        path: '/call',
        label: 'Call',
      },
      {
        path: '/grades',
        label: 'Notes',
      },
      {
        path: '/calendar',
        label: 'Calendar',
      },
    ],
  }
];

export default navigationConfig;
