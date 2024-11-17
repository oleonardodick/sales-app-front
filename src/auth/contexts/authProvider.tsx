import { useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import { executarLogin } from '../login.service';
import IUsuario from '@/responses/IUsuario';
import { buscaUsuarioPorEmail } from '@/services/usuario';
import ILogin from '@/responses/ILogin';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loggedUser, setLoggedUser] = useState<IUsuario>();

  useEffect(() => {
    const carregaToken = async () => {
      const token = await localStorage.getItem('token');
      const email = await localStorage.getItem('email');
      if (token && email && !isAuthenticated) {
        setIsAuthenticated(true);
        setLoggedUser(await buscaUsuarioPorEmail(email));
      }
    };

    carregaToken();
  }, [isAuthenticated]);

  const login = async (email: string, password: string) => {
    const loginResposta: ILogin = await executarLogin(email, password);
    if (loginResposta.statusCode === 200) {
      const token = loginResposta.token;
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      setIsAuthenticated(true);
      setLoggedUser(await buscaUsuarioPorEmail(email));
    } else {
      setIsAuthenticated(false);
      throw new Error(loginResposta.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loggedUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
