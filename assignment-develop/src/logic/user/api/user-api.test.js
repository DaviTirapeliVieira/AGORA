import User from '../models/user-model';

export const fetchUserTest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = {
        _id: '123456',
        name: 'Davi Vieira',
        email: 'developer@example.com',
        password: '123456',
        rememberToken: null,
        createdAt: '01/01/2025',
        updatedAt: '29/11/2025',
        role: 'admin',
      };

      const user = User.fromPlainObject(userData);
      resolve(user);
    }, 1000);
  });
};
