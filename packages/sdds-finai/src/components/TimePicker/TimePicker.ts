import {
    timePickerConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TimePicker.config';
import { config as clearConfig } from './TimePicker.clear.config';
import { config as viewModeConfig } from './TimePicker.viewMode.config';

const mergedConfigDefault = mergeConfig(timePickerConfig, config);
export const TimePickerDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(timePickerConfig, clearConfig);
export const TimePickerClear = component(mergedConfigClear);

const mergedConfigViewMode = mergeConfig(timePickerConfig, viewModeConfig);
export const TimePickerViewMode = component(mergedConfigViewMode);

export const TimePicker = createConditionalComponent({
    default: TimePickerDefault,
    clear: TimePickerClear,
    viewMode: TimePickerViewMode,
});
