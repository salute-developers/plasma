import { drawerContentConfig, drawerFooterConfig, drawerHeaderConfig } from '../../../components/Drawer';
import { drawerConfig } from '../../../components/Drawer/Drawer';
import { component, mergeConfig } from '../../../engines';

import { config } from './Drawer.config';

const mergedConfig = mergeConfig(drawerConfig, config);

export const Drawer = component(mergedConfig);

const mergedContentConfig = mergeConfig(drawerContentConfig);
export const DrawerContent = component(mergedContentConfig);

const mergedHeaderConfig = mergeConfig(drawerHeaderConfig);
export const DrawerHeader = component(mergedHeaderConfig);

const mergedFooterConfig = mergeConfig(drawerFooterConfig);
export const DrawerFooter = component(mergedFooterConfig);
