import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { createTabsController, TabItemProps, TabsProps } from '../../../../components/Tabs';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

export const TabsController = createTabsController(
    Tabs as ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>,
    TabItem as ForwardRefExoticComponent<TabItemProps & RefAttributes<HTMLDivElement>>,
);
