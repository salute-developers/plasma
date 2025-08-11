import { component, mergeConfig, navigationDrawerConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './NavigationDrawer.config';

const mergedConfig = mergeConfig(navigationDrawerConfig, config);

/**
 * Компонент NavigationDrawer.
 */
export const NavigationDrawer = component(mergedConfig);
