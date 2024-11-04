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
import {
  CirclePlusIcon,
  FilePenLineIcon,
  SearchIcon,
  XCircleIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const lista = [
  { nome: 'Leonardo', email: 'leonardo1@mail.com', idade: 29, sexo: 'M' },
  { nome: 'Mariana', email: 'mariana@mail.com', idade: 25, sexo: 'F' },
  { nome: 'Gabriel', email: 'gabriel@mail.com', idade: 32, sexo: 'M' },
  { nome: 'Ana', email: 'ana@mail.com', idade: 27, sexo: 'F' },
  { nome: 'Bruno', email: 'bruno@mail.com', idade: 30, sexo: 'M' },
  { nome: 'Juliana', email: 'juliana@mail.com', idade: 24, sexo: 'F' },
  { nome: 'Ricardo', email: 'ricardo@mail.com', idade: 28, sexo: 'M' },
  { nome: 'Fernanda', email: 'fernanda@mail.com', idade: 31, sexo: 'F' },
  { nome: 'Carlos', email: 'carlos@mail.com', idade: 33, sexo: 'M' },
  { nome: 'Beatriz', email: 'beatriz@mail.com', idade: 26, sexo: 'F' },
];

function Users() {
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
          {lista.map((usuario) => (
            <AppTableRow key={usuario.email}>
              <AppTableCell>{usuario.nome}</AppTableCell>
              <AppTableCell>{usuario.email}</AppTableCell>
              <AppTableCell>{usuario.idade}</AppTableCell>
              <AppTableCell>
                {usuario.sexo === 'M' ? 'Masculino' : 'Feminino'}
              </AppTableCell>
              <AppTableCell>
                <FilePenLineIcon />
              </AppTableCell>
              <AppTableCell>
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

export default Users;
