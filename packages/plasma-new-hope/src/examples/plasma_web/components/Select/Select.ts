import {
    selectConfig,
    selectItemConfig,
    selectDividerConfig,
    selectFooterConfig,
    selectGroupConfig,
    selectHeaderConfig,
} from '../../../../components/Select';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
export const Select = component(mergedConfig);

const mergedItemConfig = mergeConfig(selectItemConfig);
export const SelectItem = component(mergedItemConfig);

const mergedDividerConfig = mergeConfig(selectDividerConfig);
export const SelectDivider = component(mergedDividerConfig);

const mergedFooterConfig = mergeConfig(selectFooterConfig);
export const SelectFooter = component(mergedFooterConfig);

const mergedGroupConfig = mergeConfig(selectGroupConfig);
export const SelectGroup = component(mergedGroupConfig);

const mergedHeaderConfig = mergeConfig(selectHeaderConfig);
export const SelectHeader = component(mergedHeaderConfig);
