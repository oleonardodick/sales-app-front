import { useAuth } from '@/auth/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { FilePenLineIcon, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { loggedUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleEditar = (id: string) => {
    navigate(`/usuarios/modificar/${id}`);
  };

  return (
    <header className="flex justify-end p-1 bg-white shadow-md">
      {loggedUser && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex gap-2 items-center">
              <span>{loggedUser.nome}</span>
              <Avatar className="rounded-xl h-14 w-14">
                <AvatarImage src={loggedUser.foto} alt="@shadcn" />
                <AvatarFallback>{loggedUser.nome}</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">
              {loggedUser?.nome}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-300" />
            <DropdownMenuItem>
              <Button
                className="px-0"
                variant="link"
                onClick={() => handleEditar(loggedUser.id)}
              >
                <FilePenLineIcon /> Editar
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button className="px-0" variant="link" onClick={handleLogout}>
                <LogOutIcon /> Sair
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  );
};

export default Header;
