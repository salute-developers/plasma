import type { HTMLAttributes } from 'react';

type DropdownHeaderCustomProps = {
    /**
     * Уникальный идентификатор header
     */
    id?: string;

    size?: string;
    view?: string;
};

export type DropdownHeaderProps = HTMLAttributes<HTMLDivElement> & DropdownHeaderCustomProps;
