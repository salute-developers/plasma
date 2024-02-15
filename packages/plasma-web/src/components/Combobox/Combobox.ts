import {
    comboboxConfig,
    comboboxItemConfig,
    comboboxDividerConfig,
    comboboxFooterConfig,
    comboboxGroupConfig,
    comboboxHeaderConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Combobox.config';

const mergedConfig = mergeConfig(comboboxConfig, config);
export const Combobox = component(mergedConfig);

const mergedItemConfig = mergeConfig(comboboxItemConfig);
export const ComboboxItem = component(mergedItemConfig);

const mergedDividerConfig = mergeConfig(comboboxDividerConfig);
export const ComboboxDivider = component(mergedDividerConfig);

const mergedFooterConfig = mergeConfig(comboboxFooterConfig);
export const ComboboxFooter = component(mergedFooterConfig);

const mergedGroupConfig = mergeConfig(comboboxGroupConfig);
export const ComboboxGroup = component(mergedGroupConfig);

const mergedHeaderConfig = mergeConfig(comboboxHeaderConfig);
export const ComboboxHeader = component(mergedHeaderConfig);
