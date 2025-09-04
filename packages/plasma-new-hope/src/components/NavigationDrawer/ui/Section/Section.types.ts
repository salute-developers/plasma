import { ReactNode, HTMLAttributes } from 'react';

import { MenuItem } from '../../NavigationDrawer.types';

export type SectionProps<T extends boolean = false> = {
    items: MenuItem<T>[];
    label?: ReactNode;
    withContentLeft?: boolean;
    isOpen?: boolean;
    hasDivider?: boolean;
} & HTMLAttributes<HTMLDivElement>;
