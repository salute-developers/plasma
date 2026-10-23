import { tabBarConfig, tabBarItemConfig, tabBarSlotConfig } from '../../../components/TabBar';
import { component, mergeConfig } from '../../../engines';

import { config } from './TabBar.config';

const mergedConfig = mergeConfig(tabBarConfig, config);

export const TabBar = component(mergedConfig);
export const TabBarItem = component(mergeConfig(tabBarItemConfig));
export const TabBarSlot = component(mergeConfig(tabBarSlotConfig));
