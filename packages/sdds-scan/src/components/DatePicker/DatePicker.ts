import {
    datePickerConfig,
    datePickerRangeConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DatePicker.config';
import { config as whiteConfig } from './DatePicker.white.config';

const mergedConfigDefault = mergeConfig(datePickerConfig, config);
export const DatePickerDefault = component(mergedConfigDefault);

const mergedConfigWhite = mergeConfig(datePickerConfig, whiteConfig);
export const DatePickerWhite = component(mergedConfigWhite);

export const DatePicker = createConditionalComponent({
    default: DatePickerDefault,
    white: DatePickerWhite,
});

const mergedRangeConfigDefault = mergeConfig(datePickerRangeConfig, config);
export const DatePickerRangeDefault = component(mergedRangeConfigDefault);

const mergedRangeConfigWhite = mergeConfig(datePickerRangeConfig, whiteConfig);
export const DatePickerRangeWhite = component(mergedRangeConfigWhite);

export const DatePickerRange = createConditionalComponent({
    default: DatePickerRangeDefault,
    white: DatePickerRangeWhite,
});
