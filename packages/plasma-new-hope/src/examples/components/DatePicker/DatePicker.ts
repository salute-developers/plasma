import { component, mergeConfig } from 'src/engines';
import { createConditionalComponent } from 'src/utils';
import { datePickerConfig, datePickerRangeConfig } from 'src/components/DatePicker';

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

const mergedRangeConfigClea = mergeConfig(datePickerRangeConfig, configClear);
export const DatePickerRangeClear = component(mergedRangeConfigClea);

export const DatePickerRange = createConditionalComponent(DatePickerRangeDefault, [
    {
        conditions: { prop: 'appearance', value: 'clear' },
        component: DatePickerRangeClear,
    },
]);
