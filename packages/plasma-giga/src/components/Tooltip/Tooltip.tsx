import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { TooltipProps, tooltipConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Tooltip.config';

const mergedConfig = mergeConfig(tooltipConfig, config);

const TooltipComponent = component(mergedConfig) as ForwardRefExoticComponent<
    TooltipProps & RefAttributes<HTMLDivElement>
>;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({ mouseEnterDelay = 500, ...rest }, ref) => (
    <TooltipComponent ref={ref} mouseEnterDelay={mouseEnterDelay} {...rest} />
));
