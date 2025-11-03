const navigationConfig = [
  {
    path: '/generator',
    label: 'Generator',
  },
  {
    path: '/users',
    label: 'All',
    children: [
      {
        path: '/',
        label: 'User List',
      },
      {
        path: '/create',
        label: 'Create User',
      },
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
  },
];

export default navigationConfig;
