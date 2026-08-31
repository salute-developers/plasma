import React, { forwardRef } from 'react';
import cls from 'classnames';
import { Popover as CorePopover } from '@salutejs/plasma-new-hope/beta';
import type { PopoverProps as CorePopoverProps } from '@salutejs/plasma-new-hope/beta';

import closeInnerSizeStyles from './config/CloseInnerSize.module.css';
import closeInnerViewStyles from './config/CloseInnerView.module.css';
import closeNoneSizeStyles from './config/CloseNoneSize.module.css';
import closeNoneViewStyles from './config/CloseNoneView.module.css';

type BasePopoverProps = Omit<CorePopoverProps, 'appearance'>;

type DefaultAppearanceProps = {
    appearance?: 'default';
    view?: 'default' | 'info';
    size?: 'm' | 's';
};

type CloseInnerAppearanceProps = {
    appearance: 'closeInner';
    view?: 'default' | 'info';
    size?: 'm' | 's';
};

export type PopoverProps = BasePopoverProps & (DefaultAppearanceProps | CloseInnerAppearanceProps);

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
    ({ appearance = 'default', view = 'default', size = 'm', ...rest }, ref) => {
        const viewStyles = appearance === 'default' ? closeNoneViewStyles : closeInnerViewStyles;
        const sizeStyles = appearance === 'default' ? closeNoneSizeStyles : closeInnerSizeStyles;
        const configClassName = cls(viewStyles[view], sizeStyles[size]);

        return (
            <CorePopover
                ref={ref}
                appearance={appearance}
                // @ts-expect-error _configClassName is an internal runtime property.
                _configClassName={configClassName}
                {...rest}
            />
        );
    },
);
