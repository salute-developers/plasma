import { dateTimePickerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './DateTimePicker.config';

const mergedConfig = mergeConfig(dateTimePickerConfig, config);
export const DateTimePicker = component(mergedConfig);
