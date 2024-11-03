import React from 'react';
import { useSidebar } from '@/contexts/siderbar-context';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const { open } = useSidebar();
  return (
    <aside
      ref={ref}
      className={`flex flex-col h-full ${
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
  <nav ref={ref} className="p-3 text-lg tracking-wider h-full" {...props} />
));

const SidebarItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ ...props }, ref) => <div ref={ref} {...props} />);

const SidebarButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & {
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  }
>(({ tooltip, className, ...props }, ref) => {
  const { open } = useSidebar();
  const button = (
    <button
      ref={ref}
      className={cn(
        'flex flex-row w-full gap-2 pl-1 py-3 rounded-xl hover:border border-zinc-300',
        className
      )}
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
      className={`justify-between w-full text-left ${open ? 'flex' : 'hidden'}`}
      {...props}
    />
  );
});

const SidebarSubTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className="text-xl tracking-wider text-center py-1"
      {...props}
    />
  );
});

const SidebarSubMenu = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ ...props }, ref) => {
  const { open } = useSidebar();
  return (
    <div
      ref={ref}
      className={`${
        !open
          ? 'absolute bg-white left-20 rounded-2xl shadow-lg p-2'
          : 'flex flex-col gap-2 ml-8'
      }`}
      {...props}
    />
  );
});

const SidebarSubMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ ...props }, ref) => <div ref={ref} {...props} />);

const SidebarSubMenuText = React.forwardRef<
  HTMLParagraphElement,
  React.HtmlHTMLAttributes<HTMLParagraphElement>
>(({ ...props }, ref) => {
  return <p ref={ref} className="justify-between text-left" {...props} />;
});

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className="flex flex-row p-3 gap-2 items-center"
      {...props}
    />
  );
});

export {
  Sidebar,
  SidebarHeader,
  SidebarTitle,
  SidebarContent,
  SidebarItem,
  SidebarButton,
  SidebarMenuText,
  SidebarSubTitle,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarSubMenuText,
  SidebarFooter,
};
