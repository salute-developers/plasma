import {
    textFieldConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as searchConfig } from './TextField.search.config';
import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
const TextFieldDefault = component(mergedConfig);

export const TextField = createConditionalComponent({
    default: TextFieldDefault,
});
