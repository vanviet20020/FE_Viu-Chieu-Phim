import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useAuth } from '@/provider/authProvider';
import { ProtectedRoute } from './ProtectedRoute';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import NotFoundPage from '@/pages/NotFoundPage';
import LogoutPage from '@/pages/LogoutPage';

import AdminPage from '@/pages/Admin/AdminPage';
import UserAdminPage from '@/pages/Admin/UserPage';

const Routes = () => {
  const { token, user } = useAuth();

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
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'admin',
          element: <AdminPage />,
        },
        {
          path: 'user',
          element: <UserAdminPage />,
        },
        {
          path: 'profile',
          element: <div>User Profile</div>,
        },
        {
          path: 'logout',
          element: <LogoutPage />,
        },
      ],
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

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
