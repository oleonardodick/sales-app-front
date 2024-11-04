import { LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';

export default interface IRoutes {
  title: string;
  url: string;
  exibirSidebar?: boolean;
  icon?: LucideIcon;
  element?: ReactElement;
  subRoute?: ISubRoute[];
}

interface ISubRoute {
  title: string;
  url: string;
  icon: LucideIcon;
  element: ReactElement;
}
