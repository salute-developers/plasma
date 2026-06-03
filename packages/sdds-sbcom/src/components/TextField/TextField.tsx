import {
    textFieldConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';
import { config as clearConfig } from './TextField.clear.config';
import { config as searchConfig } from './TextField.search.config';

const mergedConfigDefault = mergeConfig(textFieldConfig, config);
export const TextFieldDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(textFieldConfig, clearConfig);
export const TextFieldClear = component(mergedConfigClear);

const mergedConfigSearch = mergeConfig(textFieldConfig, searchConfig);
export const TextFieldSearch = component(mergedConfigSearch);

export const TextField = createConditionalComponent({
    default: TextFieldDefault,
    clear: TextFieldClear,
    search: TextFieldSearch,
});
