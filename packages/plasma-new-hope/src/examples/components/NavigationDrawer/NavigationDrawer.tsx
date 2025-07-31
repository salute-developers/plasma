import { component, mergeConfig } from '../../../engines';
import { navigationDrawerConfig } from '../../../components/NavigationDrawer';

import { config } from './NavigationDrawer.config';

const mergedConfig = mergeConfig(navigationDrawerConfig, config);

/**
 * Компонент NavigationDrawer.
 */
export const NavigationDrawer = component(mergedConfig);
