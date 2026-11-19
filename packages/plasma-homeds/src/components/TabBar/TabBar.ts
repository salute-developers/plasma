import {
    component,
    mergeConfig,
    tabBarConfig,
    tabBarItemConfig,
    tabBarSlotConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TabBar.config';

const mergedConfig = mergeConfig(tabBarConfig, config);

/**
 * Нижняя панель навигации.
 */
export const TabBar = component(mergedConfig);

/**
 * Элемент панели навигации.
 */
export const TabBarItem = component(mergeConfig(tabBarItemConfig));

/**
 * Слот внутри панели. Может остаться пустым: при весе 0 ширина равна содержимому.
 */
export const TabBarSlot = component(mergeConfig(tabBarSlotConfig));
