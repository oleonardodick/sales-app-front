import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
// import { z } from 'zod';
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
import { usuarioSchema, UsuarioSchemaType } from '@/schemas/usuario';

const handleUsuarioSubmit = (data: UsuarioSchemaType, mode: string) => {
  alert(`Enviou os dados para ${mode === 'm' ? 'modificar' : 'criar'}`);
  console.log(data);
};

interface FormUsuarioProps {
  usuario: UsuarioSchemaType;
  mode: string;
}

const FormUsuario = ({ usuario, mode }: FormUsuarioProps) => {
  const form = useForm<UsuarioSchemaType>({
    resolver: zodResolver(usuarioSchema),
    defaultValues: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      idade: usuario.idade,
      sexo: usuario.sexo,
    },
  });
  const titulo = `${mode === 'm' ? 'Modificação' : 'Cadastro'} de usuário`;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">{titulo}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            id="formUsuario"
            onSubmit={form.handleSubmit((data) =>
              handleUsuarioSubmit(data, mode)
            )}
          >
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="hidden" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

export default FormUsuario;
