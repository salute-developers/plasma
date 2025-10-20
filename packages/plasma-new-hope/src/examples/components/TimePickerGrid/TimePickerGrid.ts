import { component, mergeConfig } from '../../../engines';
import { timePickerGridConfig } from '../../../components/TimePickerGrid';

import { config } from './TimePickerGrid.config';

const mergedConfig = mergeConfig(timePickerGridConfig, config);
export const TimePickerGrid = component(mergedConfig);
