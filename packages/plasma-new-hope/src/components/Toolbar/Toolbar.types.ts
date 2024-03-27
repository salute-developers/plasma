import type { HTMLAttributes, ReactNode } from 'react';

type CustomToolbarProps = {
    children: ReactNode;
    /**
     * Позиция тулбара.
     * @default 'vertical'
     */
    orientation?: 'vertical' | 'horizontal';
    /**
     * Включить/выключить тень.
     * @default true
     */
    hasShadow?: boolean;
    /**
     * Размер тулбара.
     * Ширина когда orientation равен vertical или высота когда orientation равен horizontal.
     * @default 'm'
     */
    size?: string;
    /**
     * Вид тулбара.
     */
    view?: string;
};

export type ToolbarProps = HTMLAttributes<HTMLDivElement> & CustomToolbarProps;
