import { TabsControllerProps as BaseProps } from '@salutejs/plasma-core';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';
import { createTabsController } from './createTabsController';

export interface TabsControllerProps extends BaseProps {}

/**
 * Контроллер вкладок.
 * Позволяет использовать клавиши ArrowLeft, ArrowRight, Home, End для навигации по вкладкам.
 */
export const TabsController = createTabsController(Tabs, TabItem);
