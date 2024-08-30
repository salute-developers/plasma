import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { createTabsController } from '../../../../components/Tabs';
import { TabsProps } from '../../../../components/Tabs/Tabs.types';
import { TabItemProps } from '../../../../components/Tabs/TabItem.types';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

export const TabsController = createTabsController(
    Tabs as ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>,
    TabItem as ForwardRefExoticComponent<TabItemProps & RefAttributes<HTMLDivElement>>,
);
