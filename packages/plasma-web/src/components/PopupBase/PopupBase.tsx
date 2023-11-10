import { popupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { PopupBaseProps } from '.';

const mergedConfig = mergeConfig(popupConfig);

/**
 * Базовый компонент PopupBase.
 */
export const PopupBase = component(mergedConfig) as ForwardRefExoticComponent<
    PopupBaseProps & RefAttributes<HTMLDivElement>
>;
