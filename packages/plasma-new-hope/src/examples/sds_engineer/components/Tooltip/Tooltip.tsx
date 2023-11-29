import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';

import { TooltipProps, TooltipPropsWithConfig, tooltipConfig } from '../../../../components/Tooltip';
import { component, mergeConfig } from '../../../../engines';
import { popoverConfig } from '../../../../components/Popover';

import { config, popoverCustomConfig } from './Tooltip.config';

export type { TooltipProps } from '../../../../components/Tooltip';

const mergedPopoverConfig = mergeConfig(popoverConfig, popoverCustomConfig);
const mergedConfig = mergeConfig(tooltipConfig, config);

export const TooltipComponent = component(mergedConfig) as ForwardRefExoticComponent<
    TooltipPropsWithConfig & RefAttributes<HTMLSpanElement>
>;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, outerRef) => {
    return <TooltipComponent ref={outerRef} {...props} config={mergedPopoverConfig} />;
});
