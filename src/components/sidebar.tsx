import React from 'react';
import { useSidebar } from '@/contexts/siderbar-context';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const { open } = useSidebar();
  return (
    <aside
      ref={ref}
      className={`h-screen ${
        open ? 'w-60' : 'w-16'
      } border border-zinc-200 text-zinc-950 bg-white shadow-md  dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50`}
      {...props}
    />
  );
});

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} className="flex flex-row p-3 justify-between" {...props} />
));

const SidebarTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => {
  const { open } = useSidebar();
  return (
    <h2
      ref={ref}
      className={`font-bold text-2xl tracking-wider ${open ? '' : 'hidden'}`}
      {...props}
    />
  );
});

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <nav ref={ref} className="p-3 text-lg tracking-wider" {...props} />
));

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ ...props }, ref) => <ul ref={ref} {...props} />);

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ ...props }, ref) => <li ref={ref} {...props} />);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & {
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  }
>(({ tooltip, ...props }, ref) => {
  const { open } = useSidebar();
  const button = (
    <button
      ref={ref}
      className="flex flex-row w-full gap-2 pl-1 py-3 rounded-xl hover:border border-zinc-300"
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        className="rounded-full"
        hidden={open}
        {...tooltip}
      />
    </Tooltip>
  );
});

const SidebarMenuText = React.forwardRef<
  HTMLParagraphElement,
  React.HtmlHTMLAttributes<HTMLParagraphElement>
>(({ ...props }, ref) => {
  const { open } = useSidebar();

  return (
    <p
      ref={ref}
      className={`justify-between text-left ${open ? 'flex' : 'hidden'}`}
      {...props}
    />
  );
});

const SidebarSubMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ ...props }, ref) => {
  const { open } = useSidebar();
  return (
    <ul
      ref={ref}
      className={`${
        !open ? 'absolute bg-white left-20 rounded-2xl shadow-lg' : ''
      }`}
      {...props}
    />
  );
});

const SidebarSubMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ ...props }, ref) => {
  const { open } = useSidebar();
  return (
    <li ref={ref} className={`${!open ? 'px-2 py-1' : 'ml-7'}`} {...props} />
  );
});

export {
  Sidebar,
  SidebarHeader,
  SidebarTitle,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuText,
  SidebarSubMenu,
  SidebarSubMenuItem,
};
