import {
    timePickerConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TimePicker.config';
import { config as clearConfig } from './TimePicker.clear.config';

const mergedConfigDefault = mergeConfig(timePickerConfig, config);
export const TimePickerDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(timePickerConfig, clearConfig);
export const TimePickerClear = component(mergedConfigClear);

export const TimePicker = createConditionalComponent({
    default: TimePickerDefault,
    clear: TimePickerClear,
});
