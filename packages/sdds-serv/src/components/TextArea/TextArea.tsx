import { textAreaConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './TextArea.config';

const mergedConfig = mergeConfig(textAreaConfig, config);
const TextAreaComponent = component(mergedConfig);

/**
 * Поле ввода многострочного текста.
 */
export const TextArea = TextAreaComponent;
