import { createConditionalComponent } from 'src/utils';
import { component, mergeConfig } from 'src/engines';
import { textAreaConfig } from 'src/components/TextArea';

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
