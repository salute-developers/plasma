import React, { forwardRef } from 'react';
import cls from 'classnames';

import { Tooltip as CoreTooltip } from '../../../../components/_beta/Tooltip';
import type { TooltipProps as CoreTooltipProps } from '../../../../components/_beta/Tooltip';

import sizeStyles from './config/Size.module.css';
import viewStyles from './config/View.module.css';

type TooltipView = 'default' | 'accent';
type TooltipSize = 'm' | 's';

type TooltipProps = CoreTooltipProps & {
    view?: TooltipView;
    size?: TooltipSize;
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({ view = 'default', size = 'm', ...rest }, ref) => {
    // @ts-expect-error _configClassName is an internal runtime property.
    return <CoreTooltip ref={ref} _configClassName={cls(viewStyles[view], sizeStyles[size])} {...rest} />;
});
