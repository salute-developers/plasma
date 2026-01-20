import {
    textAreaConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextArea.config';
import { config as clearConfig } from './TextArea.clear.config';

const mergedConfig = mergeConfig(textAreaConfig, config);
export const TextAreaDefault = component(mergedConfig);

const mergedConfigClear = mergeConfig(textAreaConfig, clearConfig);
export const TextAreaClear = component(mergedConfigClear);

export const TextArea = createConditionalComponent(TextAreaDefault, [
    {
        conditions: { prop: 'appearance', value: 'clear' },
        component: TextAreaClear,
    },
]);
