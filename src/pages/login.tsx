import { useAuth } from '@/auth/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, senha);
    navigate('/');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-2/6 p-3">
        <CardHeader>
          <CardTitle className="text-3xl">Bem-vindo ao Sales App</CardTitle>
          <CardDescription className="text-md">
            Por favor, realize o seu login para conectar no sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="Informe seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Informe sua senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3">
          <Button variant="link" className="text-md p-0">
            Esqueceu sua senha?
          </Button>
          <Button
            variant="default"
            className="w-full rounded-xl py-6 text-lg"
            type="submit"
            form="loginForm"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
