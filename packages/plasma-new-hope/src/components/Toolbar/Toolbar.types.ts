import type { HTMLAttributes, ReactNode } from 'react';

type CustomToolbarProps = {
    children: ReactNode;
    /**
     * Позиция тулбара.
     * @default 'vertical'
     */
    placement?: 'vertical' | 'horizontal';
    /**
     * Включить/выключить тень.
     * @default true
     */
    hasShadow?: boolean;
    /**
     * Размер тулбара.
     * Ширина когда placement равен vertical или высота когда placement равен horizontal.
     * @default 'm'
     */
    size?: string;
    /**
     * Вид тулбара.
     */
    view?: string;
};

export type ToolbarProps = HTMLAttributes<HTMLDivElement> & CustomToolbarProps;
