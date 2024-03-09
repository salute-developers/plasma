import type { HTMLAttributes } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * @deprecated
     * Максимальная ширина сетки.
     */
    maxWidth?: string | undefined;
    /**
     * Вид сетки.
     */
    view?: string;
}
