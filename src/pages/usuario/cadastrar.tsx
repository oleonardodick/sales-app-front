import FormUsuario from '@/components/app/forms/usuario';
import { UsuarioSchemaType } from '@/schemas/usuario';

const usuarioDefaultValues: UsuarioSchemaType = {
  nome: '',
  email: '',
  idade: 0,
  sexo: 'M',
};

const CadastraUsuario = () => {
  return <FormUsuario usuario={usuarioDefaultValues} mode="c" />;
};

export default CadastraUsuario;
