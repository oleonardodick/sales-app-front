export default interface IUsuario {
  id: string;
  nome: string;
  email: string;
  papel: string;
  telefone: string;
  foto: string;
  rua: string;
  numero: number;
  cidade: string;
  cep: string;
  dataNascimento: Date;
  ativo: boolean;
}
