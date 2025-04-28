import type { ReactNode } from 'react';

type CustomListItemProps = {
    /**
     * Disabled
     */
    disabled?: boolean;

    /**
     * Контент справа
     */
    contentRight?: ReactNode;

    children?: ReactNode;
};

export type ListItemProps = CustomListItemProps;
