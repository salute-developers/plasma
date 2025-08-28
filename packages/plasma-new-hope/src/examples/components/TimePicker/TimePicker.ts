import { component, mergeConfig } from '../../../engines';
import { timePickerConfig } from '../../../components/TimePicker';

import { config } from './TimePicker.config';

const mergedConfig = mergeConfig(timePickerConfig, config);
export const TimePicker = component(mergedConfig);
