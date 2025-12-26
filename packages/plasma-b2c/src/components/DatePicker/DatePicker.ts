import {
    datePickerConfig,
    datePickerRangeConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DatePicker.config';
import { config as configClear } from './DatePicker.clear.config';

const mergedConfigDefault = mergeConfig(datePickerConfig, config);
export const DatePickerDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(datePickerConfig, configClear);
export const DatePickerClear = component(mergedConfigClear);

export const DatePicker = createConditionalComponent(DatePickerDefault, [
    {
        conditions: { prop: 'appearance', value: 'clear' },
        component: DatePickerClear,
    },
]);

const mergedRangeConfigDefault = mergeConfig(datePickerRangeConfig, config);
export const DatePickerRangeDefault = component(mergedRangeConfigDefault);

const mergedRangeConfigClear = mergeConfig(datePickerRangeConfig, configClear);
export const DatePickerRangeClear = component(mergedRangeConfigClear);

export const DatePickerRange = createConditionalComponent(DatePickerRangeDefault, [
    {
        conditions: { prop: 'appearance', value: 'clear' },
        component: DatePickerRangeClear,
    },
]);
