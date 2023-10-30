import { modalConfig } from '../../../../components/Modal';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Modal.config';

export { modalClasses } from '../../../../components/Modal';

const mergedConfig = mergeConfig(modalConfig, config);

export const Modal = component(mergedConfig);
