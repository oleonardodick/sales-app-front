import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import { HomeIcon, UsersIcon } from 'lucide-react';
import Users from './pages/user';
import IRoutes from './interfaces/IRoutes';
import CadastraUsuario from './pages/user/cadastrar';
import { Layout } from './components/app/layout';

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
    url: '/',
    exibirSidebar: true,
    icon: HomeIcon,
    element: <Home />,
  },
  {
    title: 'Usuários',
    url: '/usuarios',
    exibirSidebar: true,
    icon: UsersIcon,
    element: <Users />,
  },
  {
    title: 'Cadastrar Usuário',
    url: '/usuarios/cadastrar',
    element: <CadastraUsuario />,
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

      <Route element={<Layout items={privateRoutes} />}>
        {privateRoutes.map((route) => {
          return (
            <Route key={route.title} path={route.url} element={route.element} />
          );
        })}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
