import { component, mergeConfig } from 'src/engines';
import { createConditionalComponent } from 'src/utils';
import { textFieldSliderConfig } from 'src/components/TextFieldSlider';

import { config } from './TextFieldSlider.config';
import { config as clearConfig } from './TextFieldSlider.clear.config';

const mergedConfigDefault = mergeConfig(textFieldSliderConfig, config);
export const TextFieldSliderDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(textFieldSliderConfig, clearConfig);
export const TextFieldSliderClear = component(mergedConfigClear);

export const TextFieldSlider = createConditionalComponent(TextFieldSliderDefault, [
    {
        conditions: { prop: 'appearance', value: 'clear' },
        component: TextFieldSliderClear,
    },
]);
