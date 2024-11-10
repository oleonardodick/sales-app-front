import IRoutes from '@/interfaces/IRoutes';
import { AppSidebar } from './sidebar';
import { SidebarProvider } from '@/contexts/siderbar-context';
import { Outlet } from 'react-router-dom';
import Header from './header';

interface LayoutProps {
  items: IRoutes[];
}

export function Layout({ items }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex flex-row h-screen">
        <AppSidebar items={items.filter((item) => item.exibirSidebar)} />
        <main className="flex flex-col gap-2  w-full">
          <Header />
          <div className="px-3">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
