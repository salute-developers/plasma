import { _beta_tooltipConfig } from 'src/components/_beta/Tooltip';
import { component, mergeConfig } from 'src/engines';

import { config } from './Tooltip.config';

const mergedConfig = mergeConfig(_beta_tooltipConfig, config);
export const Tooltip = component(mergedConfig);
