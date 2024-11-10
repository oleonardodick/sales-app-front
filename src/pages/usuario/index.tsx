import {
  AppTable,
  AppTableBody,
  AppTableCell,
  AppTableHead,
  AppTableHeader,
  AppTableHeadIcon,
  AppTableRow,
} from '@/components/app/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { UsuarioSchemaType } from '@/schemas/usuario';
import {
  CirclePlusIcon,
  FilePenLineIcon,
  SearchIcon,
  XCircleIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dadosUsuarios } from './dadosUsuario';

function Usuarios() {
  const [usuarios, setUsuarios] = useState<UsuarioSchemaType[]>([]);

  useEffect(() => {
    setUsuarios(dadosUsuarios);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="text-end">
        <Button variant="outline" className="rounded-xl py-6 text-lg" asChild>
          <Link to={'/usuarios/cadastrar'}>
            <CirclePlusIcon /> Cadastrar
          </Link>
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="w-2/4 flex justify-end items-center relative">
          <Input
            placeholder="Pesquisar"
            className="border border-gray-400 rounded-xl p-4 w-full h-11"
          />
          <SearchIcon className="absolute mr-2 w-10" />
        </div>
      </div>
      <AppTable>
        <AppTableHeader>
          <AppTableRow>
            <AppTableHead>Nome</AppTableHead>
            <AppTableHead>E-mail</AppTableHead>
            <AppTableHead>Idade</AppTableHead>
            <AppTableHead>Sexo</AppTableHead>
            <AppTableHeadIcon />
            <AppTableHeadIcon />
          </AppTableRow>
        </AppTableHeader>
        <AppTableBody>
          {usuarios.map((usuario) => (
            <AppTableRow key={usuario.email}>
              <AppTableCell>{usuario.nome}</AppTableCell>
              <AppTableCell>{usuario.email}</AppTableCell>
              <AppTableCell>{usuario.idade}</AppTableCell>
              <AppTableCell>
                {usuario.sexo === 'M' ? 'Masculino' : 'Feminino'}
              </AppTableCell>
              <AppTableCell tooltip={'Editar'}>
                <FilePenLineIcon />
              </AppTableCell>
              <AppTableCell tooltip={'Excluir'}>
                <XCircleIcon />
              </AppTableCell>
            </AppTableRow>
          ))}
        </AppTableBody>
      </AppTable>
      <div>
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default Usuarios;
