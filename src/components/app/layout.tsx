import { SidebarProvider } from '@/contexts/siderbar-context';
import IRoutes from '@/interfaces/IRoutes';
import { AppSidebar } from './sidebar';

export default function Layout({
  children,
  items,
}: {
  children: React.ReactNode;
  items: IRoutes[];
}) {
  return (
    <div className="flex flex-row h-screen">
      <SidebarProvider>
        <AppSidebar items={items} />
      </SidebarProvider>
      <main className="p-3 w-full">{children}</main>
    </div>
  );
}
