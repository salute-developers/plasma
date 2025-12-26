import { _beta_tooltipConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Tooltip.config';

const mergedConfig = mergeConfig(_beta_tooltipConfig, config);
export const Tooltip = component(mergedConfig);
