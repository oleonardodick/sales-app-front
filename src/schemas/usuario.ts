import { z } from 'zod';

export const usuarioSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(2, {
    message: 'O nome deve ter ao menos 2 caracteres.',
  }),
  email: z.string().email('E-mail inválido'),
  idade: z.preprocess(
    (val) => (val !== '' ? Number(val) : undefined),
    z.number().min(18, { message: 'O usuário deve ser maior de idade.' })
  ),
  sexo: z.enum(['M', 'F']),
});

export type UsuarioSchemaType = z.infer<typeof usuarioSchema>;
