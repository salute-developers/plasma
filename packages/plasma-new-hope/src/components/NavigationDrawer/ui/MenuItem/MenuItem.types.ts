import { HTMLAttributes } from 'react';

import { MenuItem } from '../../NavigationDrawer.types';

export type MenuItemProps = (MenuItem<true> | MenuItem<false>) & {
    withContentLeft?: boolean;
    isOpen?: boolean;
} & HTMLAttributes<HTMLDivElement>;
