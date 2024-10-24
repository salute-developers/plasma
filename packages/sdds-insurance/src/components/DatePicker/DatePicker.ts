import {
    datePickerConfig,
    datePickerRangeConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DatePicker.config';

const mergedConfig = mergeConfig(datePickerConfig, config);
export const DatePicker = component(mergedConfig);

const mergedRangeConfig = mergeConfig(datePickerRangeConfig, config);
export const DatePickerRange = component(mergedRangeConfig);
