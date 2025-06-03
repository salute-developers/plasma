import { ForwardRefExoticComponent, RefAttributes } from 'react';

import {
    createTabsController,
    horizontalTabItemConfig as horizontalBaseTabItemConfig,
    horizontalTabsConfig as horizontalBaseTabsConfig,
    HorizontalTabItemProps,
    HorizontalTabsProps,
} from '../../../components/Tabs';
import { component, mergeConfig } from '../../../engines';

import { config as horizontalTabsConfig } from './horizontal/HorizontalTabs.config';
import { config as horizontalTabItemConfig } from './horizontal/HorizontalTabItem.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalBaseTabsConfig, horizontalTabsConfig);
const HorizontalTabs = component(mergedHorizontalTabsConfig);

const mergedHorizontalTabItemConfig = mergeConfig(horizontalBaseTabItemConfig, horizontalTabItemConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

export const TabsController = createTabsController(
    HorizontalTabs as ForwardRefExoticComponent<HorizontalTabsProps & RefAttributes<HTMLDivElement>>,
    HorizontalTabItem as ForwardRefExoticComponent<HorizontalTabItemProps & RefAttributes<HTMLDivElement>>,
);
