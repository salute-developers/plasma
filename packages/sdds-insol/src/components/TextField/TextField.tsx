import {
    textFieldConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';
import { config as clearConfig } from './TextField.clear.config';

const mergedConfigDefault = mergeConfig(textFieldConfig, config);
export const TextFieldDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(textFieldConfig, clearConfig);
export const TextFieldClear = component(mergedConfigClear);

export const TextField = createConditionalComponent(TextFieldDefault, [
    {
        conditions: { prop: 'appearance', value: 'clear' },
        component: TextFieldClear,
    },
]);
