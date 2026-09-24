import { dialogModalConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Modal.config';

const mergedConfig = mergeConfig(dialogModalConfig, config);

/**
 * Компонент диалогового окна.
 */
export const DialogModal = component(mergedConfig);
