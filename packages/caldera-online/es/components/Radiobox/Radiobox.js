import { radioboxConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Radiobox.config';
var mergedConfig = /*#__PURE__*/mergeConfig(radioboxConfig, config);
var RadioboxComponent = /*#__PURE__*/component(mergedConfig);
/**
 * Переключатель, или *радиокнопка*.
 */
export var Radiobox = RadioboxComponent;
export { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';