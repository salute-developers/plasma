import {
    textFieldConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as clearConfig } from './TextField.clear.config';
import { config as searchConfig } from './TextField.search.config';
import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
const TextFieldDefault = component(mergedConfig);

const mergedConfigSearch = mergeConfig(textFieldConfig, searchConfig);
export const TextFieldSearch = component(mergedConfigSearch);

const mergedConfigClear = mergeConfig(textFieldConfig, clearConfig);
export const TextFieldClear = component(mergedConfigClear);

export const TextField = createConditionalComponent({
    default: TextFieldDefault,
    search: TextFieldSearch,
    clear: TextFieldClear,
});
