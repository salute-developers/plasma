import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import {
    TooltipProps,
    TooltipPropsWithConfig,
    tooltipConfig,
    popoverConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config, popoverCustomConfigS, popoverCustomConfigM } from './Tooltip.config';

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
