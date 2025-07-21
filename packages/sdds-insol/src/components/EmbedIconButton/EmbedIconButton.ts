import { embedIconButtonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './EmbedIconButton.config';

const mergedConfig = mergeConfig(embedIconButtonConfig, config);
const EmbedIconButtonComponent = component(mergedConfig);

/**
 * Кнопка с иконкой.
 */
export const EmbedIconButton = EmbedIconButtonComponent;
