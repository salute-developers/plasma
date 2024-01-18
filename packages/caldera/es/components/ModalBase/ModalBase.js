import { modalConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Modal.config';
var mergedConfig = /*#__PURE__*/mergeConfig(modalConfig, config);
var ModalBaseComponent = /*#__PURE__*/component(mergedConfig);

/**
 * Модальное окно.
 */
export var ModalBase = ModalBaseComponent;