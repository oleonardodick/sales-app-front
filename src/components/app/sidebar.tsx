import { Menu, X } from 'lucide-react';
import {
  Sidebar,
  SidebarButton,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarMenuText,
  // SidebarSubMenu,
  // SidebarSubMenuItem,
  // SidebarSubMenuText,
  // SidebarSubTitle,
  SidebarTitle,
} from '../ui/sidebar';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { useSidebar } from '@/contexts/siderbar-context';
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from '../ui/collapsible';
import IRoutes from '@/interfaces/IRoutes';

export function AppSidebar({ items }: { items: IRoutes[] }) {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle>Sales App</SidebarTitle>
        <Button
          size="icon"
          variant="link"
          className="font-bold text-gray-300"
          onClick={toggleSidebar}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </SidebarHeader>
      <Separator className="bg-gray-300" />
      <SidebarContent>
        {items.map((item) => (
          <SidebarItem key={item.title}>
            {/* {item.subRoute ? (
                  <Collapsible className={`${open ? '' : 'flex flex-row'}`}>
                    <CollapsibleTrigger asChild>
                      <SidebarButton
                        tooltip={item.title}
                        className="[&[data-state=open]>p>svg]:rotate-90"
                      >
                        {item.icon && <item.icon />}
                        <SidebarMenuText>
                          {item.title}
                          <ChevronRight className="transition-transform duration-200" />
                        </SidebarMenuText>
                      </SidebarButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarSubMenu>
                        {!open && (
                          <>
                            <SidebarSubTitle>{item.title}</SidebarSubTitle>
                            <Separator />
                          </>
                        )}
                        {item.subRoute.map((subRoute) => (
                          <SidebarSubMenuItem key={subRoute.title}>
                            <SidebarButton
                              data-active={
                                location.pathname.split('/')[1] === item.url
                              }
                            >
                              <subRoute.icon />
                              <Link to={subRoute.url}>
                                <SidebarSubMenuText>
                                  {subRoute.title}
                                </SidebarSubMenuText>
                              </Link>
                            </SidebarButton>
                          </SidebarSubMenuItem>
                        ))}
                      </SidebarSubMenu>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <Link to={item.url}>
                      <SidebarMenuText>{item.title}</SidebarMenuText>
                    </Link>
                  </SidebarButton>
                )} */}
            <SidebarButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <Link to={item.url}>
                <SidebarMenuText>{item.title}</SidebarMenuText>
              </Link>
            </SidebarButton>
          </SidebarItem>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
