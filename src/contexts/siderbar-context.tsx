import { TooltipProvider } from '@radix-ui/react-tooltip';
import React from 'react';

type SidebarContext = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    children,
  }) => {
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        if (setOpenProp) {
          return setOpenProp?.(
            typeof value === 'function' ? value(open) : value
          );
        }
        _setOpen(value);
      },
      [setOpenProp, open]
    );

    const toggleSidebar = React.useCallback(() => {
      return setOpen((open) => !open);
    }, [setOpen]);

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        open,
        setOpen,
        toggleSidebar,
      }),
      [open, setOpen, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={100}>{children}</TooltipProvider>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = 'SidebarProvider';

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}
