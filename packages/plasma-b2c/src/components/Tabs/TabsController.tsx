import { createTabsController } from '@salutejs/plasma-new-hope/styled-components';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

/**
 * Контроллер вкладок.
 * Позволяет использовать клавиши ArrowLeft, ArrowRight, Home, End для навигации по вкладкам.
 */
export const TabsController = createTabsController(Tabs, TabItem);
