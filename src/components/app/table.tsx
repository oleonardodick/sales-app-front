import * as React from 'react';
import {
  Table as BaseTable,
  TableBody as BaseTableBody,
  TableCell as BaseTableCell,
  TableHead as BaseTableHead,
  TableHeader as BaseTableHeader,
  TableRow as BaseTableRow,
  TableFooter as BaseTableFooter,
} from '@/components/ui/table';

const AppTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ ...props }, ref) => (
  <BaseTable ref={ref} className="bg-white shadow-2xl" {...props} />
));

const AppTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => <BaseTableBody ref={ref} {...props} />);

const AppTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ ...props }, ref) => <BaseTableCell ref={ref} {...props} />);

const AppTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ ...props }, ref) => <BaseTableHead ref={ref} {...props} />);

const AppTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => (
  <BaseTableHeader ref={ref} className="text-md" {...props} />
));

const AppTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ ...props }, ref) => (
  <BaseTableRow
    ref={ref}
    className="[&>th]:font-black [&>th]:bg-slate-300 [&>td]:leading-9 [&>td]:odd:bg-white [&>td]:even:bg-slate-100"
    {...props}
  />
));

const AppTableHeadIcon = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ ...props }, ref) => (
  <BaseTableHead ref={ref} className="w-9" {...props} />
));

const AppTableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => <BaseTableFooter ref={ref} {...props} />);

export {
  AppTable,
  AppTableBody,
  AppTableCell,
  AppTableHead,
  AppTableHeadIcon,
  AppTableHeader,
  AppTableRow,
  AppTableFooter,
};
