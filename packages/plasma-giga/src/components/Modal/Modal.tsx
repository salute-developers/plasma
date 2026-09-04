import {
    modalConfig,
    modalFooterConfig,
    modalHeaderConfig,
    modalImageConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Modal.config';

const mergedConfig = mergeConfig(modalConfig, config);
const mergedHeaderConfig = mergeConfig(modalHeaderConfig);
const mergedFooterConfig = mergeConfig(modalFooterConfig);
const mergedImageConfig = mergeConfig(modalImageConfig);

/**
 * Модальное окно.
 */
export const Modal = component(mergedConfig);

/**
 * Верхняя часть Modal.
 */
export const ModalHeader = component(mergedHeaderConfig);

/**
 * Нижняя часть Modal.
 */
export const ModalFooter = component(mergedFooterConfig);

/**
 * Слот изображения Modal.
 */
export const ModalImage = component(mergedImageConfig);
