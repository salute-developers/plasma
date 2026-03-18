import {
    datePickerConfig,
    datePickerRangeConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DatePicker.config';

const mergedConfigDefault = mergeConfig(datePickerConfig, config);
export const DatePicker = component(mergedConfigDefault);

const mergedRangeConfigDefault = mergeConfig(datePickerRangeConfig, config);
export const DatePickerRange = component(mergedRangeConfigDefault);
