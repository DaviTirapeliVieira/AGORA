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
import BulletinPage from '@/components/pages/bulletin-page/bulletin-page.component';
import AttendancePage from '@/components/pages/attendence-page/attendence-page.component';
import CreateDisciplinePage from '@/components/pages/create-discipline-page/create-discipline-page.component';
import NotAuthorizedPage from '@/components/pages/not-authorized-page/not-authorized.component';
import Authenticated from '@/logic/authentication/guards/authenticated';
import Unauthenticated from '@/logic/authentication/guards/unauthenticated';
import RoleGuard from '@/logic/authentication/guards/role-guard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authenticated />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        element: <RoleGuard allowedRoles={['admin', 'secretary']} />,
        children: [
          { path: '/users', element: <UserListPage /> },
          { path: '/users/create', element: <CreateUserPage /> },
          {
            path: '/users/createDiscipline',
            element: <CreateDisciplinePage />,
          },
        ],
      },
      {
        element: <RoleGuard allowedRoles={['admin', 'secretary', 'teacher']} />,
        children: [
          { path: '/operations/call/:classId', element: <CallPage /> },
          { path: '/operations/grades', element: <GradesPage /> },
        ],
      },
      {
        element: (
          <RoleGuard
            allowedRoles={['admin', 'secretary', 'teacher', 'student']}
          />
        ),
        children: [{ path: '/operations/calendar', element: <CalendarPage /> }],
      },
      {
        element: <RoleGuard allowedRoles={['student']} />,
        children: [{ path: '/users/bulletin', element: <BulletinPage /> }],
      },
      {
        element: <RoleGuard allowedRoles={['student']} />,
        children: [{ path: '/users/attendance', element: <AttendancePage /> }],
      },
      {
        element: <RoleGuard allowedRoles={['admin']} />,
        children: [{ path: '/generator', element: <GeneratorPage /> }],
      },
    ],
  },
  {
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

  { path: '/not-authorized', element: <NotAuthorizedPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
