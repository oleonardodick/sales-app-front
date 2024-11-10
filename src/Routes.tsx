import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import { HomeIcon, UsersIcon } from 'lucide-react';
import IRoutes from './interfaces/IRoutes';
import { Layout } from './components/app/layout';
import CadastraUsuario from './pages/usuario/cadastrar';
import Usuarios from './pages/usuario';
import Dashboard from './pages/dashboard';
import { useAuth } from './auth/hooks/useAuth';
import ModificaUsuario from './pages/usuario/modificar';

const publicRoutes: IRoutes[] = [
  {
    title: 'Login',
    url: '/login',
    element: <Login />,
  },
];

const privateRoutes: IRoutes[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    exibirSidebar: true,
    icon: HomeIcon,
    element: <Dashboard />,
  },
  {
    title: 'Usuários',
    url: '/usuarios',
    exibirSidebar: true,
    icon: UsersIcon,
    element: <Usuarios />,
  },
  {
    title: 'Cadastrar Usuário',
    url: '/usuarios/cadastrar',
    element: <CadastraUsuario />,
  },
  {
    title: 'Modificar Usuário',
    url: '/usuarios/modificar/:id',
    element: <ModificaUsuario />,
  },
];

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route key={route.title} path={route.url} element={route.element} />
        );
      })}

      <Route element={<Layout items={privateRoutes} />}>
        <Route key="/" path="/" element={<Navigate to="/dashboard" />} />
        {privateRoutes.map((route) => {
          return (
            <Route
              key={route.title}
              path={route.url}
              element={
                isAuthenticated ? route.element : <Navigate to="/login" />
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
