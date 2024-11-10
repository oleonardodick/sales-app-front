import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';

const usuarioSchema = z.object({
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

type UsuarioSchema = z.infer<typeof usuarioSchema>;

const handleUsuarioSubmit = (data: UsuarioSchema) => {
  alert('enviou os dados');
  console.log(data);
};

const CadastraUsuario = () => {
  const form = useForm<UsuarioSchema>({
    resolver: zodResolver(usuarioSchema),
    defaultValues: {
      nome: '',
      email: '',
      idade: 0,
      sexo: 'M',
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Cadastro de Usuário
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            id="formUsuario"
            onSubmit={form.handleSubmit(handleUsuarioSubmit)}
          >
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idade</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Idade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sexo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sexo</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <option value={'M'}>Masculino</option>
                      <option value={'F'}>Feminino</option>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="default" size="lg" type="submit" form="formUsuario">
          Salvar
        </Button>
        <Button variant="outline" size="lg">
          Cancelar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CadastraUsuario;
