import type { HTMLAttributes, ReactNode } from 'react';

type CustomBreadcrumbShorterProps = {
    children: ReactNode[];
    separator: ReactNode;
};

export type BreadcrumbShorterProps = CustomBreadcrumbShorterProps & HTMLAttributes<HTMLDivElement>;
