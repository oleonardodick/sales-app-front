import { SidebarProvider } from '@/contexts/siderbar-context';
import { AppSidebar } from './app-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-screen">
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <main>{children}</main>
    </div>
  );
}
