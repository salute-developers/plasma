import {
    textFieldConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';
import { config as clearConfig } from './TextField.clear.config';
import { config as viewModeConfig } from './TextField.viewMode.config';

const mergedConfigDefault = mergeConfig(textFieldConfig, config);
export const TextFieldDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(textFieldConfig, clearConfig);
export const TextFieldClear = component(mergedConfigClear);

const mergedConfigViewMode = mergeConfig(textFieldConfig, viewModeConfig);
export const TextFieldViewMode = component(mergedConfigViewMode);

export const TextField = createConditionalComponent({
    default: TextFieldDefault,
    clear: TextFieldClear,
    viewMode: TextFieldViewMode,
});
