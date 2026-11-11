import {
    numberInputConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './NumberInput.config';
import { config as whiteConfig } from './NumberInput.white.config';

const mergedConfigDefault = mergeConfig(numberInputConfig, config);
export const NumberInputDefault = component(mergedConfigDefault);

const mergedConfigWhite = mergeConfig(numberInputConfig, whiteConfig);
export const NumberInputWhite = component(mergedConfigWhite);

export const NumberInput = createConditionalComponent({
    default: NumberInputDefault,
    white: NumberInputWhite,
});
