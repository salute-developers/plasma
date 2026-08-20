import React, { forwardRef } from 'react';
import cls from 'classnames';

import { _beta_popoverRoot } from '../../../../components/_beta/Popover';
import type { _beta_PopoverProps } from '../../../../components/_beta/Popover';

// @ts-expect-error CSS Modules are processed by Storybook.
import closeInnerSizeStyles from './config/CloseInnerSize.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import closeInnerViewStyles from './config/CloseInnerView.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import closeNoneSizeStyles from './config/CloseNoneSize.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import closeNoneViewStyles from './config/CloseNoneView.module.css';

type PopoverView = 'default' | 'accent';
type PopoverSize = 'l' | 'm' | 's';

type PopoverProps = Omit<_beta_PopoverProps, 'view' | 'size'> & {
    view?: PopoverView;
    size?: PopoverSize;
};

const Root = forwardRef<HTMLDivElement, Omit<_beta_PopoverProps, 'target'>>(({ view, size, ...rest }, ref) => (
    <div ref={ref} {...rest} />
));

const CorePopover = _beta_popoverRoot(Root);

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
    ({ appearance = 'closeNone', view = 'default', size = 'm', className, ...rest }, ref) => {
        const viewStyles = appearance === 'closeInner' ? closeInnerViewStyles : closeNoneViewStyles;
        const sizeStyles = appearance === 'closeInner' ? closeInnerSizeStyles : closeNoneSizeStyles;
        const rootClassName = cls(viewStyles[view], sizeStyles[size], className);

        return (
            <CorePopover
                ref={ref}
                appearance={appearance}
                view={view}
                size={size}
                className={rootClassName}
                {...rest}
            />
        );
    },
);
