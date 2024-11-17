import config from '@/utils/config';
import axios from 'axios';
import ILoginResposta from '../responses/ILogin';
import IUsuarioResposta from '../responses/IUsuario';

export const executarLogin = async (
  email: string,
  senha: string
): Promise<ILoginResposta> => {
  try {
    const response = await axios.post(`${config.API_URL}/auth/login`, {
      email: email,
      senha: senha,
    });
    return {
      statusCode: response.status,
      token: response.data.access_token,
      message: 'Usuário logado com sucesso',
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return {
          statusCode: error.response.status,
          token: '',
          message: error.response.data.message,
        };
      } else if (error.request) {
        return {
          statusCode: error.request.status,
          token: '',
          message: error.request.data.message,
        };
      }
    }
    return {
      statusCode: 500,
      token: '',
      message: 'Erro inesperado',
    };
  }
};

export const buscaUsuarioConectado = async (
  email: string,
  token: string
): Promise<IUsuarioResposta> => {
  const response = await axios.get(`${config.API_URL}/usuarios/query`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      email: email,
    },
  });
  return response.data;
};
