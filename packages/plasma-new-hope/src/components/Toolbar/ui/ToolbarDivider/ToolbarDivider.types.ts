import type { HTMLAttributes } from 'react';

type ToolbarDividerCustomProps = {
    /**
     * Вид разделителя.
     */
    view?: string;
};

export type ToolbarDividerProps = HTMLAttributes<HTMLDivElement> & ToolbarDividerCustomProps;
