import { createConditionalComponent } from 'src/utils';

import { component, mergeConfig } from '../../../engines';
import { timePickerConfig } from '../../../components/TimePicker';

import { config } from './TimePicker.config';
import { config as clearConfig } from './TimePicker.clear.config';

const mergedConfigDefault = mergeConfig(timePickerConfig, config);
export const TimePickerDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(timePickerConfig, clearConfig);
export const TimePickerClear = component(mergedConfigClear);

export const TimePicker = createConditionalComponent({
    default: TimePickerDefault,
    clear: TimePickerClear,
});
