import {
    selectConfig,
    component,
    mergeConfig,
    selectDividerConfig,
    selectItemConfig,
} from '@salutejs/plasma-new-hope/emotion';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import { config } from './Select.config';

import type { SelectProps } from '.';

const mergedConfig = mergeConfig(selectConfig, config);
export const Select = component(mergedConfig) as ForwardRefExoticComponent<
    SelectProps & RefAttributes<HTMLSelectElement>
>;

const mergedItemConfig = mergeConfig(selectItemConfig);
export const SelectItem = component(mergedItemConfig);

const mergedDividerConfig = mergeConfig(selectDividerConfig);
export const SelectDivider = component(mergedDividerConfig);
