import { tabItemConfig, component, mergeConfig, TabItemProps } from '@salutejs/plasma-new-hope/styled-components';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { config } from './TabItem.config';

const mergedConfig = mergeConfig(tabItemConfig, config);

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = component(mergedConfig) as ForwardRefExoticComponent<
    TabItemProps & RefAttributes<HTMLDivElement>
>;
