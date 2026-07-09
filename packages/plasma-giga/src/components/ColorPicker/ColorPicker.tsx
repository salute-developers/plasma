import { colorPickerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './ColorPicker.config';

const mergedConfig = mergeConfig(colorPickerConfig, config);

export const ColorPicker = component(mergedConfig);
