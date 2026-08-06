import { attachConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Attach.config';

const mergedConfig = mergeConfig(attachConfig, config);

/**
 * Компонент, позволяющий прикрепить локальный файл
 */
export const Attach = component(mergedConfig);
