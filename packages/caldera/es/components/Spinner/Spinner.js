import styled from 'styled-components';
import { spinnerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Spinner.config';
var mergedConfig = /*#__PURE__*/mergeConfig(spinnerConfig, config);
var SpinnerComponent = /*#__PURE__*/component(mergedConfig);
/**
 * Компонент для отображения индикатора загрузки.
 */
export var Spinner = /*#__PURE__*/styled(SpinnerComponent).withConfig({
  componentId: "caldera__sc-15gqtn4-0"
})([""]);