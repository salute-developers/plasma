import { tabItemConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './TabItem.config';

const mergedConfig = mergeConfig(tabItemConfig, config);

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = component(mergedConfig);
