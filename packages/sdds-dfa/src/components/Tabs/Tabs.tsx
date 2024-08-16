import { tabsConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Tabs.config';

const mergedConfig = mergeConfig(tabsConfig, config);
/**
 * Контейнер вкладок, основной компонент для пользовательской сборки вкладок.
 */
export const Tabs = component(mergedConfig);
