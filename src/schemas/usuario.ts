import { z } from 'zod';

export const usuarioSchema = z.object({
  id: z.string(),
  nome: z.string().min(2, {
    message: 'O nome deve ter ao menos 2 caracteres.',
  }),
  email: z.string().email('E-mail inválido'),
});

export type UsuarioSchemaType = z.infer<typeof usuarioSchema>;

// {
//   "nome": "string",
//   "email": "string",
//   "senha": "string",
//   "telefone": "string",
//   "foto": "string",
//   "rua": "string",
//   "numero": 0,
//   "cidade": "string",
//   "cep": "string",
//   "dataNascimento": "2024-11-17T19:03:47.109Z"
// }
