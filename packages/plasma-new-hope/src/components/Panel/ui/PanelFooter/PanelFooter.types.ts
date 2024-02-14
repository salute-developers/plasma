import type { HTMLAttributes } from 'react';

export type PanelFooterProps = {
    /*
     * Вид нижней части Panel
     */
    view?: string;
} & HTMLAttributes<HTMLDivElement>;
