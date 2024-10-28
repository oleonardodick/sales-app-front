import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import { useAuth } from './auth/hooks/useAuth';
import Layout from './components/layout';
import { ReactElement } from 'react';

const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

enum RouteType {
  OPEN = 'open',
  PROTECTED = 'protected',
}

interface RouteConfig {
  type: RouteType;
  path: string;
  element: ReactElement;
}

const routes: RouteConfig[] = [
  {
    type: RouteType.OPEN,
    path: '/login',
    element: <Login />,
  },
  {
    type: RouteType.PROTECTED,
    path: '/',
    element: <Home />,
  },
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => {
        if (route.type === 'protected') {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute element={<Layout>{route.element}</Layout>} />
              }
            />
          );
        } else {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        }
      })}
    </Routes>
  );
};

export default AppRoutes;
