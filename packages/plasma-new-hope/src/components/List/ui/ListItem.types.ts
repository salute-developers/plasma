import type { HTMLAttributes, ReactNode } from 'react';

type CustomListItemProps = {
    /**
     * Disabled
     */
    disabled?: boolean;

    /**
     * Контент слева
     */
    contentLeft?: ReactNode;

    /**
     * Контент справа
     */
    contentRight?: ReactNode;
};

export type ListItemProps = HTMLAttributes<HTMLLIElement> & CustomListItemProps;
