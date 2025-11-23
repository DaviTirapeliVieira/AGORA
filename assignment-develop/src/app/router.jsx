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
import CreateUserPage from '@/components/pages/create-user-page/create-user-page.component';
import ResetPasswordPage from '@/components/pages/reset-password-page/reset-password-page.component';
import Authenticated from '@/logic/authentication/guards/authenticated';
import Unauthenticated from '@/logic/authentication/guards/unauthenticated';

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
          { path: 'create', element: <CreateUserPage /> },
        ],
      },
      {
        path: '/operations',
        children: [
          { path: 'call', element: <CallPage /> },
          { path: 'grades', element: <GradesPage /> },
          { path: 'calendar', element: <CalendarPage /> },
        ],
      },
      {
        path: '/generator',
        element: <GeneratorPage />,
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
        path: '/reset-password',
        element: <AuthLayout />,
        children: [{ index: true, element: <ResetPasswordPage /> }],
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
