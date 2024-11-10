import { UsuarioSchemaType } from '@/schemas/usuario';
import { createContext } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  loggedUser?: UsuarioSchemaType;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
