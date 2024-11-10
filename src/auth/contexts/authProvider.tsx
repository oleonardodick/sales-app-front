import { useEffect, useState } from 'react';
import { AuthContext } from './authContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const carregaToken = async () => {
      const token = await localStorage.getItem('token');
      if (token && !isAuthenticated) {
        setIsAuthenticated(true);
      }
    };

    carregaToken();
  }, [isAuthenticated]);

  const login = async (email: string, password: string) => {
    try {
      //executar aqui o post para a API para o login
      if (email === 'admin@mail.com' && password === 'admin') {
        const token = 'tokenJWT';
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log('Erro de login', error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
