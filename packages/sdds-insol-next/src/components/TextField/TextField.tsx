import {
    textFieldConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfigDefault = mergeConfig(textFieldConfig, config);
export const TextFieldDefault = component(mergedConfigDefault);

export const TextField = createConditionalComponent({
    default: TextFieldDefault,
});
