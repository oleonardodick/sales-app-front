import { Calendar, Home, Inbox, Menu, Search, Settings, X } from 'lucide-react';
import {
  Sidebar,
  SidebarButton,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarMenuText,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarSubMenuText,
  SidebarSubTitle,
  SidebarTitle,
} from './sidebar';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useSidebar } from '@/contexts/siderbar-context';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

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
        {items.map((item) => (
          <SidebarItem key={item.title}>
            {item.subitem ? (
              <Accordion type="single" collapsible>
                <AccordionItem value={item.title} className="border-none">
                  <AccordionTrigger className="text-md font-normal hover:no-underline py-0">
                    <SidebarButton tooltip={item.title}>
                      <item.icon />
                      <SidebarMenuText>{item.title}</SidebarMenuText>
                    </SidebarButton>
                  </AccordionTrigger>
                  <AccordionContent className="text-md">
                    <SidebarSubMenu>
                      {!open && (
                        <>
                          <SidebarSubTitle>{item.title}</SidebarSubTitle>
                          <Separator />
                        </>
                      )}
                      {item.subitem.map((subitem) => (
                        <SidebarSubMenuItem key={subitem.title}>
                          <SidebarButton>
                            <subitem.icon />
                            <Link to={subitem.url}>
                              <SidebarSubMenuText>
                                {subitem.title}
                              </SidebarSubMenuText>
                            </Link>
                          </SidebarButton>
                        </SidebarSubMenuItem>
                      ))}
                    </SidebarSubMenu>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <SidebarButton tooltip={item.title}>
                <item.icon />
                <Link to={item.url}>
                  <SidebarMenuText>{item.title}</SidebarMenuText>
                </Link>
              </SidebarButton>
            )}
          </SidebarItem>
        ))}
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <Avatar className="rounded-xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>Usuario</AvatarFallback>
        </Avatar>
        {open && <span>Usuario</span>}
      </SidebarFooter>
    </Sidebar>
  );
}
