import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import { useAuth } from './auth/hooks/useAuth';
import Layout from './components/app/layout';
import { HomeIcon, UsersIcon } from 'lucide-react';
import Users from './pages/user';
import IRoutes from './interfaces/IRoutes';

const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const publicRoutes: IRoutes[] = [
  {
    title: 'Login',
    url: '/login',
    element: <Login />,
  },
];

const privateRoutes: IRoutes[] = [
  {
    title: 'Home',
    url: '/',
    icon: HomeIcon,
    element: <Home />,
  },
  {
    title: 'Users',
    url: '/users',
    icon: UsersIcon,
    element: <Users />,
  },
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route key={route.title} path={route.url} element={route.element} />
        );
      })}

      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.title}
            path={route.url}
            element={
              <ProtectedRoute
                element={<Layout items={privateRoutes}>{route.element}</Layout>}
              />
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
