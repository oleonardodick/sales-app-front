import {
  Calendar,
  ChevronRight,
  Home,
  Inbox,
  Menu,
  Search,
  Settings,
  X,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuText,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarTitle,
} from './sidebar';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { Link } from 'react-router-dom';
import { useSidebar } from '@/contexts/siderbar-context';

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
    subitem: [
      {
        title: 'Teste',
        url: '/inbox/teste',
        icon: Inbox,
      },
      {
        title: 'Teste 2',
        url: '/inbox/teste',
        icon: Inbox,
      },
    ],
  },
  {
    title: 'Calendar',
    url: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '/search',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
    subitem: [
      {
        title: 'Teste',
        url: '#',
        icon: Settings,
      },
    ],
  },
];

export function AppSidebar() {
  const { open, toggleSidebar } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle>Sales App</SidebarTitle>
        <Button
          size="icon"
          variant="link"
          className="font-bold"
          onClick={toggleSidebar}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <Collapsible key={item.title}>
              <SidebarMenuItem key={item.title}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon />
                    {item.subitem ? (
                      <SidebarMenuText>
                        {item.title}
                        <ChevronRight />
                      </SidebarMenuText>
                    ) : (
                      <Link to={item.url}>
                        <SidebarMenuText>{item.title}</SidebarMenuText>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item.subitem && (
                  <CollapsibleContent>
                    <SidebarSubMenu>
                      {item.subitem.map((subitem) => (
                        <SidebarSubMenuItem
                          key={item.title + '_' + subitem.title}
                        >
                          <SidebarMenuButton>
                            <subitem.icon />
                            <Link to={subitem.url}>
                              <span>{subitem.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarSubMenuItem>
                      ))}
                    </SidebarSubMenu>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
