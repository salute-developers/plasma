import { FC } from 'react';
import type { IconProps } from '@salutejs/plasma-icons';

export type Item = { name: string; component: FC<IconProps>; groupName?: string; isDeprecate?: boolean };

export type IconGroup = {
    title: string;
    subtitle: string;
};

export type Group = { iconGroup: IconGroup; items: Array<Item> };

export type IconGroups = Array<Group>;
