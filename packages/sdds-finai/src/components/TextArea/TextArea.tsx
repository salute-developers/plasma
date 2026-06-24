import {
    textAreaConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextArea.config';
import { config as viewModeConfig } from './TextArea.viewMode.config';

const mergedConfig = mergeConfig(textAreaConfig, config);
export const TextAreaDefault = component(mergedConfig);

const mergedConfigViewMode = mergeConfig(textAreaConfig, viewModeConfig);
export const TextAreaViewMode = component(mergedConfigViewMode);

/**
 * Поле ввода многострочного текста.
 */
export const TextArea = createConditionalComponent({
    default: TextAreaDefault,
    viewMode: TextAreaViewMode,
});
