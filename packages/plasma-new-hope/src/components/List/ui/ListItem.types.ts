import type { HTMLAttributes, ReactNode } from 'react';

type CustomListItemProps = {
    /**
     * Disabled
     */
    disabled?: boolean;

    /**
     * Контент справа
     */
    contentRight?: ReactNode;
};

export type ListItemProps = HTMLAttributes<HTMLLIElement> & CustomListItemProps;
