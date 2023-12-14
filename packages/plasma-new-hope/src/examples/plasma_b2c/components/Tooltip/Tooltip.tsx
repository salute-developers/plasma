import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { TooltipProps, tooltipConfig } from '../../../../components/Tooltip';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Tooltip.config';

export type { TooltipProps } from '../../../../components/Tooltip';

const mergedConfig = mergeConfig(tooltipConfig, config);

export const Tooltip = component(mergedConfig) as ForwardRefExoticComponent<
    TooltipProps & RefAttributes<HTMLSpanElement>
>;
