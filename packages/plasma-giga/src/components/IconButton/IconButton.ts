import { iconButtonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './IconButton.config';

const mergedConfig = mergeConfig(iconButtonConfig, config);
const IconButtonComponent = component(mergedConfig);

/**
 * Кнопка с иконкой.
 */
export const IconButton = IconButtonComponent;
