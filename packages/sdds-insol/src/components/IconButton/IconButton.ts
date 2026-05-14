import {
    iconButtonConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './IconButton.config';
import { config as outlineConfig } from './IconButton.outline.config';

const mergedConfigDefault = mergeConfig(iconButtonConfig, config);
const IconButtonDefault = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(iconButtonConfig, outlineConfig);
const IconButtonOutline = component(mergedConfigOutline);

/**
 * Кнопка с иконкой.
 */
export const IconButton = createConditionalComponent({
    default: IconButtonDefault,
    outline: IconButtonOutline,
});
