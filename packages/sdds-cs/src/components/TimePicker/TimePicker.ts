import { timePickerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './TimePicker.config';

const mergedConfig = mergeConfig(timePickerConfig, config);
export const TimePicker = component(mergedConfig);
