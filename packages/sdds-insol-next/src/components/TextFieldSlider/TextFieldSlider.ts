import { component, mergeConfig, textFieldSliderConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextFieldSlider.config';

const mergedConfig = mergeConfig(textFieldSliderConfig, config);
export const TextFieldSlider = component(mergedConfig);
