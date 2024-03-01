import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Button.config';
var mergedConfig = /*#__PURE__*/mergeConfig(buttonConfig, config);
var ButtonComponent = /*#__PURE__*/component(mergedConfig);
/**
 * Кнопка.
 */
export var Button = ButtonComponent;