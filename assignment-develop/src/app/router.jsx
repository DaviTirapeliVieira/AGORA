import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '@/components/templates/auth-layout/auth-layout.component';
import HomePage from '@/components/pages/home-page/home-page.component';
import LoginPage from '@/components/pages/login-page/login-page.component';
import { UserListPage } from '@/components/pages/user-list-page';
import { NotFoundPage } from '@/components/pages/not-found-page';
import GeneratorPage from '@/components/pages/generator-page/generator-page.component';
import CallPage from '@/components/pages/call-page/call-page.component';
import GradesPage from '@/components/pages/grades-page/grades-page.component';
import CalendarPage from '@/components/pages/calendar-page/calendar-page.component';
import Authenticated from '@/logic/authentication/guards/authenticated';
import Unauthenticated from '@/logic/authentication/guards/unauthenticated';

const UserPlaceholder = () => <div>Create User Page Placeholder</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authenticated />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/users',
        children: [
          { path: '', element: <UserListPage /> },
          { path: 'create', element: <UserPlaceholder /> },
        ],
      },
      {
        path: '/generator',
        element: <GeneratorPage />,
      },
      {
        path: '/users/call',
        element: <CallPage />,
      },
      {
        path: '/users/grades',
        element: <GradesPage />,
      },
      {
        path: '/users/calendar',
        element: <CalendarPage />,
      },
    ],
  },
  {
    path: '/',
    element: <Unauthenticated />,
    children: [
      {
        path: '/login',
        element: <AuthLayout />,
        children: [{ index: true, element: <LoginPage /> }],
      },
      {
        path: '/register',
        element: <AuthLayout />,
        children: [{ index: true, element: <div>Register Page</div> }],
      },
      {
        path: '/reset-password',
        element: <AuthLayout />,
        children: [{ index: true, element: <div>Reset Password Page</div> }],
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
