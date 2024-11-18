import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
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
import { usuarioSchema, UsuarioSchemaType } from '@/schemas/usuario';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { useState } from 'react';
import { Label } from '@/components/ui/label';

const handleUsuarioSubmit = (data: UsuarioSchemaType, mode: string) => {
  alert(`Enviou os dados para ${mode === 'm' ? 'modificar' : 'criar'}`);
  console.log(data);
};

interface FormUsuarioProps {
  usuario?: UsuarioSchemaType;
  mode: string;
}

const FormUsuario = ({ usuario, mode }: FormUsuarioProps) => {
  const handleSelecionarFoto = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: FieldValues
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      field.onChange(file);

      const reader = new FileReader();
      reader.onload = () => {
        setFotoValue(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const form = useForm<UsuarioSchemaType>({
    resolver: zodResolver(usuarioSchema),
    defaultValues: {
      ...usuario,
    },
  });
  const titulo = `${mode === 'm' ? 'Modificação' : 'Cadastro'} de usuário`;
  const [fotoValue, setFotoValue] = useState(form.watch('foto'));

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
            <div className="flex gap-2">
              <div className="w-full">
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
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="Telefone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rua"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rua</FormLabel>
                      <FormControl>
                        <Input placeholder="Rua" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numero"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Número" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Input placeholder="Cidade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cep"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cep</FormLabel>
                      <FormControl>
                        <Input placeholder="Cep" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
              control={form.control}
              name="dataNascimento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nascimento</FormLabel>
                  <FormControl>
                    <Input type='date' placeholder="Data de nascimento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
              </div>
              <FormField
                control={form.control}
                name="foto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Foto</FormLabel>
                    <Avatar className="w-56 h-56 rounded-none border border-black">
                      <AvatarImage src={fotoValue} />
                    </Avatar>
                    <FormControl>
                      <Input
                        className="hidden"
                        id="foto"
                        type="file"
                        onChange={(e) => {
                          handleSelecionarFoto(e, field);
                        }}
                      />
                    </FormControl>
                    <Label
                      htmlFor="foto"
                      className="cursor-pointer inline-block py-2 w-full text-center rounded-xl border border-black"
                    >
                      Escolher foto
                    </Label>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
