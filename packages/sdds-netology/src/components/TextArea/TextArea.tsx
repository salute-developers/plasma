import { textAreaConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextArea.config';

const mergedConfig = mergeConfig(textAreaConfig, config);
const TextAreaComponent = component(mergedConfig);

/**
 * Поле ввода многострочного текста.
 */
export const TextArea = TextAreaComponent;
