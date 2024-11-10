import FormUsuario from '@/components/app/forms/usuario';
import { UsuarioSchemaType } from '@/schemas/usuario';
import { useEffect, useState } from 'react';
import { dadosUsuarios } from './dadosUsuario';
import { useParams } from 'react-router-dom';

const ModificaUsuario = () => {
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<UsuarioSchemaType>();
  useEffect(() => {
    setUsuario(dadosUsuarios.find((u) => u.id === id));
  }, [id]);

  return usuario && <FormUsuario usuario={usuario} mode="m" />;
};

export default ModificaUsuario;
