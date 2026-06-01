import {
    datePickerConfig,
    datePickerRangeConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DatePicker.config';

const mergedConfigDefault = mergeConfig(datePickerConfig, config);
export const DatePickerDefault = component(mergedConfigDefault);

export const DatePicker = createConditionalComponent({
    default: DatePickerDefault,
});

const mergedRangeConfigDefault = mergeConfig(datePickerRangeConfig, config);
export const DatePickerRangeDefault = component(mergedRangeConfigDefault);

export const DatePickerRange = createConditionalComponent({
    default: DatePickerRangeDefault,
});
