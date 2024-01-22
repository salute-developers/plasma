import { modalConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import { config } from './Modal.config';

import { ModalProps } from '.';

const mergedConfig = mergeConfig(modalConfig, config);
const ModalComponent = component(mergedConfig) as ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>;

/**
 * Модальное окно.
 */
export const Modal = ModalComponent;
