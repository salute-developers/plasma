import {
    dateTimePickerConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DateTimePicker.config';
import { config as clearConfig } from './DateTimePicker.clear.config';

const mergedConfigDefault = mergeConfig(dateTimePickerConfig, config);
export const DateTimePickerDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(dateTimePickerConfig, clearConfig);
export const DateTimePickerClear = component(mergedConfigClear);

export const DateTimePicker = createConditionalComponent({
    default: DateTimePickerDefault,
    clear: DateTimePickerClear,
});
