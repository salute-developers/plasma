import { modalConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ModalProps } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Modal.config';

const mergedConfig = mergeConfig(modalConfig, config);
const ModalBaseComponent = component(mergedConfig) as React.ForwardRefExoticComponent<
    ModalProps & React.RefAttributes<HTMLDivElement>
>;

/**
 * Модальное окно.
 */
export const ModalBase = ModalBaseComponent;
