import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { TooltipProps, tooltipConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Tooltip.config';

const mergedConfig = mergeConfig(tooltipConfig, config);

export const Tooltip = component(mergedConfig) as ForwardRefExoticComponent<
    TooltipProps & RefAttributes<HTMLDivElement>
>;
