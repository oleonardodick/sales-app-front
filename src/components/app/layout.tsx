import IRoutes from '@/interfaces/IRoutes';
import { AppSidebar } from './sidebar';
import { SidebarProvider } from '@/contexts/siderbar-context';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  items: IRoutes[];
}

export function Layout({ items }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex flex-row h-screen">
        <AppSidebar items={items.filter((item) => item.exibirSidebar)} />
        <main className="p-3 w-full">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
