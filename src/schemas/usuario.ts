import { z } from 'zod';

export const usuarioSchema = z.object({
  id: z.string(),
  nome: z.string().min(2, {
    message: 'O nome deve ter ao menos 2 caracteres.',
  }),
  email: z.string().email('E-mail inválido'),
  // senha: z
  //   .string()
  //   .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]$/, {
  //     message:
  //       'A senha deve possuir ao menos uma letra minúscula, uma maiúscula, um número.',
  //   })
  //   .min(8, { message: 'A senha deve possuir pelo menos 8 caracteres.' }),
  telefone: z.string(),
  foto: z.string(),
  rua: z.string(),
  numero: z.number(),
  cidade: z.string(),
  cep: z.string(),
  dataNascimento: z.date(),
});

export type UsuarioSchemaType = z.infer<typeof usuarioSchema>;
