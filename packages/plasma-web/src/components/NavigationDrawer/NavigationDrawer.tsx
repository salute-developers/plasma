import { component, mergeConfig, navigationDrawerConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './NavigationDrawer.config';

const mergedConfig = mergeConfig(navigationDrawerConfig, config);

/**
 * Компонент NavigationDrawer — это компонент навигационного меню,
 * который используется для организации и упрощения навигации по приложению.
 */
export const NavigationDrawer = component(mergedConfig);
