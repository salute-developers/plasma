import { checkboxConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Checkbox.config';
var mergedConfig = /*#__PURE__*/mergeConfig(checkboxConfig, config);
var CheckboxComponent = /*#__PURE__*/component(mergedConfig);
/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export var Checkbox = CheckboxComponent;