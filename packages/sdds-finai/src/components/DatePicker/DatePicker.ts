import {
    datePickerConfig,
    datePickerRangeConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DatePicker.config';
import { config as viewModeConfig } from './DatePicker.viewMode.config';

const mergedConfig = mergeConfig(datePickerConfig, config);
export const DatePickerDefault = component(mergedConfig);

const mergedConfigViewMode = mergeConfig(datePickerConfig, viewModeConfig);
export const DatePickerViewMode = component(mergedConfigViewMode);

export const DatePicker = createConditionalComponent({
    default: DatePickerDefault,
    viewMode: DatePickerViewMode,
});

const mergedRangeConfig = mergeConfig(datePickerRangeConfig, config);
export const DatePickerRangeDefault = component(mergedRangeConfig);

const mergedRangeConfigViewMode = mergeConfig(datePickerRangeConfig, viewModeConfig);
export const DatePickerRangeViewMode = component(mergedRangeConfigViewMode);

export const DatePickerRange = createConditionalComponent({
    default: DatePickerRangeDefault,
    viewMode: DatePickerRangeViewMode,
});
