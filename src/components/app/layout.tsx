import IRoutes from '@/interfaces/IRoutes';
import { AppSidebar } from './sidebar';
import { SidebarProvider } from '@/contexts/siderbar-context';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/auth/hooks/useAuth';

interface LayoutProps {
  items: IRoutes[];
}

export function Layout({ items }: LayoutProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <SidebarProvider>
      <div className="flex flex-row h-screen">
        <AppSidebar items={items} />
        <main className="p-3 w-full">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
