import {
    drawerConfig,
    drawerContentConfig,
    drawerFooterConfig,
    drawerHeaderConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Drawer.config';

const mergedConfig = mergeConfig(drawerConfig, config);
const mergedContentConfig = mergeConfig(drawerContentConfig);
const mergedHeaderConfig = mergeConfig(drawerHeaderConfig);
const mergedFooterConfig = mergeConfig(drawerFooterConfig);

/**
 * Компонент Drawer.
 */
export const Drawer = component(mergedConfig);

/**
 * Компонент части контента Drawer.
 */
export const DrawerContent = component(mergedContentConfig);

/**
 * Компонент верхней части Drawer.
 */
export const DrawerHeader = component(mergedHeaderConfig);

/**
 * Компонент нижней контента Drawer.
 */
export const DrawerFooter = component(mergedFooterConfig);
