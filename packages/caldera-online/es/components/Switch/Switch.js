import { switchConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Switch.config';
var mergedConfig = /*#__PURE__*/mergeConfig(switchConfig, config);
var SwitchComponent = /*#__PURE__*/component(mergedConfig);
/**
 * Визуальный переключатель между двумя взаимоисключающими состояниями — вкл. и выкл.
 */
export var Switch = SwitchComponent;