import { tabsConfig, component, mergeConfig, TabsProps } from '@salutejs/plasma-new-hope/styled-components';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { config } from './Tabs.config';

const mergedConfig = mergeConfig(tabsConfig, config);
/**
 * Контейнер вкладок, основной компонент для пользовательской сборки вкладок.
 */
export const Tabs = component(mergedConfig) as ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>;
