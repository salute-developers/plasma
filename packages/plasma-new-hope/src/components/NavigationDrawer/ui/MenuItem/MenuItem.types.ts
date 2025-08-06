import { MenuItem } from 'src/components/NavigationDrawer/NavigationDrawer.types';
import { HTMLAttributes } from 'react';

export type MenuItemProps = (MenuItem<true> | MenuItem<false>) & {
    withContentLeft?: boolean;
    isOpened?: boolean;
} & HTMLAttributes<HTMLDivElement>;
