import { FC } from 'react';

export type Item = { name: string; component: FC<any>; groupName?: string };

export type IconGroup = {
    title: string;
    subtitle: string;
};

export type Group = { iconGroup: IconGroup; items: Array<Item> };

export type IconGroups = Array<Group>;
