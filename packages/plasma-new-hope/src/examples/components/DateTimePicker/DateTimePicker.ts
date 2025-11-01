import { component, mergeConfig } from 'src/engines';
import { dateTimePickerConfig } from 'src/components/DateTimePicker';

import { config } from './DateTimePicker.config';

const mergedConfig = mergeConfig(dateTimePickerConfig, config);
export const DateTimePicker = component(mergedConfig);
