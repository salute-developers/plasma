import type { HTMLAttributes } from 'react';

type DropdownDividerCustomProps = {
    /**
     * Уникальный идентификатор разделителя
     */
    id?: string;

    size?: string;
    view?: string;
};

export type DropdownDividerProps = HTMLAttributes<HTMLDivElement> & DropdownDividerCustomProps;
