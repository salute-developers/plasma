import {
    dateTimePickerConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DateTimePicker.config';
import { config as clearConfig } from './DateTimePicker.clear.config';
import { config as viewModeConfig } from './DateTimePicker.viewMode.config';

const mergedConfigDefault = mergeConfig(dateTimePickerConfig, config);
export const DateTimePickerDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(dateTimePickerConfig, clearConfig);
export const DateTimePickerClear = component(mergedConfigClear);

const mergedConfigViewMode = mergeConfig(dateTimePickerConfig, viewModeConfig);
export const DateTimePickerViewMode = component(mergedConfigViewMode);

export const DateTimePicker = createConditionalComponent({
    default: DateTimePickerDefault,
    clear: DateTimePickerClear,
    viewMode: DateTimePickerViewMode,
});
