import IUsuario from '@/responses/IUsuario';
import config from '@/utils/config';
import axios from 'axios';

const URL = `${config.API_URL}/usuarios`;

export const buscaTodosUsuarios = async (): Promise<IUsuario[]> => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const buscaUsuarioPorEmail = async (
  email: string
): Promise<IUsuario> => {
  const response = await axios.get(`${URL}/query`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    params: {
      email: email,
    },
  });
  return response.data;
};

export const buscaUsuarioPorId = async (id: string): Promise<IUsuario> => {
  const response = await axios.get(`${URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};
