import FormUsuario from '@/components/app/forms/usuario';
import { UsuarioSchemaType } from '@/schemas/usuario';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscaUsuarioPorId } from '@/services/usuario';
import IUsuario from '@/responses/IUsuario';

const ModificaUsuario = () => {
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<UsuarioSchemaType>();
  useEffect(() => {
    const buscaUsuario = async () => {
      if (id) {
        const usuarioRetornado: IUsuario = await buscaUsuarioPorId(id);
        setUsuario({
          ...usuarioRetornado,
        });
      }
    };
    if (id) {
      buscaUsuario();
    }
  }, [id]);

  return usuario && <FormUsuario usuario={usuario} mode="m" />;
};

export default ModificaUsuario;
