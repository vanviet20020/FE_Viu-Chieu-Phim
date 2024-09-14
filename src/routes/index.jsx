import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '@/providers/authProvider';
import ProtectedRoute from './ProtectedRoute';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import NotFoundPage from '@/pages/NotFoundPage';
import UnauthorizedPage from '@/pages/UnauthorizedPage';
import MissingPage from '@/pages/MissingPage';

import DashboardPage from '@/pages/Admin/DashboardPage';
import UserAdminPage from '@/pages/Admin/UserPage';
import MovieAdminPage from '@/pages/Admin/MoviePage';
import MovieCreatePage from '@/pages/Admin/MovieCreatePage';
import MovieUpdatePage from '@/pages/Admin/MovieUpdatePage';

const ROLES = { user: 'user', admin: 'admin', superAdmin: 'super_admin' };

const Routes = () => {
  const { user } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'contact',
      element: <ContactPage />,
    },
    {
      path: 'unauthorized',
      element: <UnauthorizedPage />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForUserOnly = [
    {
      path: '/',
      element: <ProtectedRoute allowedRoles={[ROLES.user]} />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'profile',
          element: <div>User Profile</div>,
        },
      ],
    },
  ];

  // Define routes accessible only to authenticated admin
  const routesForAdminOnly = [
    {
      path: 'admin',
      element: <ProtectedRoute allowedRoles={[ROLES.admin]} />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
        {
          path: 'user',
          children: [{ index: true, element: <UserAdminPage /> }],
        },
        {
          path: 'movie',
          children: [
            { index: true, element: <MovieAdminPage /> },
            { path: 'create', element: <MovieCreatePage /> },
            { path: 'update/:movieId', element: <MovieUpdatePage /> },
          ],
        },
      ],
    },
  ];

  // Define routes accessible only to authenticated super_admin
  const routesForSuperAdminOnly = [
    {
      path: 'admin',
      element: <ProtectedRoute allowedRoles={[ROLES.superAdmin]} />,
      errorElement: <NotFoundPage />,
      children: [],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!user ? routesForNotAuthenticatedOnly : []),
    ...routesForUserOnly,
    ...routesForAdminOnly,
    ...routesForSuperAdminOnly,
    { path: '*', element: <MissingPage /> } /* catch all */,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
