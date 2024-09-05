import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { createTabsController } from '@salutejs/plasma-new-hope/styled-components';
import type { TabsProps, TabItemProps } from '@salutejs/plasma-new-hope/styled-components';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

/**
 * Контроллер вкладок.
 * Позволяет использовать клавиши ArrowLeft, ArrowRight, Home, End для навигации по вкладкам.
 */
export const TabsController = createTabsController(
    Tabs as ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>,
    TabItem as ForwardRefExoticComponent<TabItemProps & RefAttributes<HTMLDivElement>>,
);
