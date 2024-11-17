import IUsuario from '@/responses/IUsuario';
import { createContext } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  loggedUser?: IUsuario;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
