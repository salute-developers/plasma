import { popupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import { PopupProps } from '.';

const mergedConfig = mergeConfig(popupConfig);

/**
 * Базовый компонент Popup.
 */
export const Popup = component(mergedConfig) as ForwardRefExoticComponent<PopupProps & RefAttributes<HTMLDivElement>>;
