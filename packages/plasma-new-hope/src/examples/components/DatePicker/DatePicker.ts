import { component, mergeConfig } from '../../../engines';
import { datePickerConfig, datePickerRangeConfig } from '../../../components/DatePicker';

import { config } from './DatePicker.config';

const mergedConfig = mergeConfig(datePickerConfig, config);
export const DatePicker = component(mergedConfig);

const mergedRangeConfig = mergeConfig(datePickerRangeConfig, config);
export const DatePickerRange = component(mergedRangeConfig);
