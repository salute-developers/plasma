import {
    createTabsController,
    horizontalTabItemConfig as horizontalBaseTabItemConfig,
    horizontalTabsConfig as horizontalBaseTabsConfig,
    HorizontalTabItemProps,
    HorizontalTabsProps,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { config as horizontalTabsConfig } from './horizontal/HorizontalTabs.config';
import { config as horizontalTabItemConfig } from './horizontal/HorizontalTabItem.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalBaseTabsConfig, horizontalTabsConfig);
const HorizontalTabs = component(mergedHorizontalTabsConfig);

const mergedHorizontalTabItemConfig = mergeConfig(horizontalBaseTabItemConfig, horizontalTabItemConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

/**
 * Контроллер вкладок.
 * Позволяет использовать клавиши ArrowLeft, ArrowRight, Home, End для навигации по вкладкам.
 */
export const TabsController = createTabsController(
    HorizontalTabs as ForwardRefExoticComponent<HorizontalTabsProps & RefAttributes<HTMLDivElement>>,
    HorizontalTabItem as ForwardRefExoticComponent<HorizontalTabItemProps & RefAttributes<HTMLDivElement>>,
);
