import React, { forwardRef } from 'react';
import cls from 'classnames';

import { _beta_tooltipRoot } from '../../../../components/_beta/Tooltip';
import type { _beta_TooltipProps } from '../../../../components/_beta/Tooltip';

// @ts-expect-error CSS Modules are processed by Storybook.
import sizeStyles from './config/Size.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import viewStyles from './config/View.module.css';

type TooltipView = 'default' | 'accent';
type TooltipSize = 'm' | 's';

type TooltipProps = Omit<_beta_TooltipProps, 'view' | 'size'> & {
    view?: TooltipView;
    size?: TooltipSize;
};

const Root = forwardRef<HTMLDivElement, Omit<_beta_TooltipProps, 'target' | 'children' | 'iconSlot'>>(
    ({ view, size, ...rest }, ref) => <div ref={ref} {...rest} />,
);

const CoreTooltip = _beta_tooltipRoot(Root);

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
    ({ view = 'default', size = 'm', className, ...rest }, ref) => {
        const rootClassName = cls(viewStyles[view], sizeStyles[size], className);

        return <CoreTooltip ref={ref} view={view} size={size} className={rootClassName} {...rest} />;
    },
);
