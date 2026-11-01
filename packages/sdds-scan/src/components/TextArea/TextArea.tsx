import {
    textAreaConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextArea.config';
import { config as whiteConfig } from './TextArea.white.config';

const mergedConfigDefault = mergeConfig(textAreaConfig, config);
export const TextAreaDefault = component(mergedConfigDefault);

const mergedConfigWhite = mergeConfig(textAreaConfig, whiteConfig);
export const TextAreaWhite = component(mergedConfigWhite);

export const TextArea = createConditionalComponent({
    default: TextAreaDefault,
    white: TextAreaWhite,
});
