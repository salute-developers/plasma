import { component, mergeConfig } from '../../../engines';
import { colorPickerConfig } from '../../../components/ColorPicker';

import { config } from './ColorPicker.config';

const mergedConfig = mergeConfig(colorPickerConfig, config);
export const ColorPicker = component(mergedConfig);
