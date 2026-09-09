import React, { forwardRef } from 'react';
import cls from 'classnames';
import { Tooltip as CoreTooltip } from '@salutejs/plasma-new-hope/beta';
import type { TooltipProps as CoreTooltipProps } from '@salutejs/plasma-new-hope/beta';

import sizeStyles from './config/Size.module.css';
import viewStyles from './config/View.module.css';

type TooltipView = 'default';
type TooltipSize = 'm' | 's';

export type TooltipProps = CoreTooltipProps & {
    view?: TooltipView;
    size?: TooltipSize;
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({ view = 'default', size = 'm', ...rest }, ref) => {
    const configClassName = cls(viewStyles[view], sizeStyles[size]);

    // @ts-expect-error _configClassName is an internal runtime property.
    return <CoreTooltip ref={ref} _configClassName={configClassName} {...rest} />;
});
