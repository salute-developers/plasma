import {
    textFieldConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';
import { config as whiteConfig } from './TextField.white.config';

const mergedConfigDefault = mergeConfig(textFieldConfig, config);
export const TextFieldDefault = component(mergedConfigDefault);

const mergedConfigWhite = mergeConfig(textFieldConfig, whiteConfig);
export const TextFieldWhite = component(mergedConfigWhite);

export const TextField = createConditionalComponent({
    default: TextFieldDefault,
    white: TextFieldWhite,
});
