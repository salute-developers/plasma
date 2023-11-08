import type { HTMLAttributes } from 'react';

type DropdownFooterCustomProps = {
    /**
     * Уникальный идентификатор разделителя
     */
    id?: string;

    size?: string;
    view?: string;
};

export type DropdownFooterProps = HTMLAttributes<HTMLDivElement> & DropdownFooterCustomProps;
