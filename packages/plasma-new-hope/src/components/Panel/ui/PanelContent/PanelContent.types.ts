import type { HTMLAttributes } from 'react';

export type PanelContentProps = {
    /*
     * Вид контента
     */
    view?: string;
} & HTMLAttributes<HTMLDivElement>;
