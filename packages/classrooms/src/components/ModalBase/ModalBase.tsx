import { modalConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import { config } from './Modal.config';

import { ModalBaseProps } from '.';

const mergedConfig = mergeConfig(modalConfig, config);
const ModalBaseComponent = component(mergedConfig) as ForwardRefExoticComponent<
    ModalBaseProps & RefAttributes<HTMLDivElement>
>;

/**
 * Модальное окно.
 */
export const ModalBase = ModalBaseComponent;
