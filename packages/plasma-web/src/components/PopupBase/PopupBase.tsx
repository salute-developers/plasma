import { popupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const mergedConfig = mergeConfig(popupConfig);

/**
 * Базовый компонент PopupBase.
 */
export const PopupBase = component(mergedConfig);
