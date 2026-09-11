import { modalConfig, modalFooterConfig, modalHeaderConfig, modalImageConfig } from '../../../components/Modal';
import { component, mergeConfig } from '../../../engines';

import { config } from './Modal.config';

export { modalClasses } from '../../../components/Modal';

const mergedConfig = mergeConfig(modalConfig, config);
const mergedHeaderConfig = mergeConfig(modalHeaderConfig);
const mergedFooterConfig = mergeConfig(modalFooterConfig);
const mergedImageConfig = mergeConfig(modalImageConfig);

export const Modal = component(mergedConfig);
export const ModalHeader = component(mergedHeaderConfig);
export const ModalFooter = component(mergedFooterConfig);
export const ModalImage = component(mergedImageConfig);
