import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';

import { TooltipProps, TooltipPropsWithConfig, tooltipConfig } from '../../../../components/Tooltip';
import { component, mergeConfig } from '../../../../engines';
import { popoverConfig } from '../../../../components/Popover';

import { config, popoverCustomConfigS, popoverCustomConfigM } from './Tooltip.config';

export type { TooltipProps } from '../../../../components/Tooltip';

const mergedPopoverConfigS = mergeConfig(popoverConfig, popoverCustomConfigS);
const mergedPopoverConfigM = mergeConfig(popoverConfig, popoverCustomConfigM);
const mergedConfig = mergeConfig(tooltipConfig, config);

export const TooltipComponent = component(mergedConfig) as ForwardRefExoticComponent<
    TooltipPropsWithConfig & RefAttributes<HTMLSpanElement>
>;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, outerRef) => {
    const popoverInnerConfig = props.size === 'm' ? mergedPopoverConfigM : mergedPopoverConfigS;
    return <TooltipComponent ref={outerRef} {...props} config={popoverInnerConfig} />;
});
