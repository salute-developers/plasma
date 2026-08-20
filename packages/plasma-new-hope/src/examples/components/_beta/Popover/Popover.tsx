import React, { forwardRef } from 'react';
import cls from 'classnames';

import { Popover as CorePopover } from '../../../../components/_beta';
import type { PopoverProps as CorePopoverProps } from '../../../../components/_beta';

import closeInnerSizeStyles from './config/CloseInnerSize.module.css';
import closeInnerViewStyles from './config/CloseInnerView.module.css';
import closeNoneSizeStyles from './config/CloseNoneSize.module.css';
import closeNoneViewStyles from './config/CloseNoneView.module.css';

type BasePopoverProps = Omit<CorePopoverProps, 'appearance'>;

type DefaultAppearanceProps = {
    appearance?: 'default';
    view?: 'default' | 'accent';
    size?: 'l' | 'm' | 's';
};

type CloseNoneAppearanceProps = {
    appearance: 'closeNone';
    view?: 'default' | 'accent';
    size?: 'l' | 'm' | 's';
};

export type PopoverProps = BasePopoverProps & (DefaultAppearanceProps | CloseNoneAppearanceProps);

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
    ({ appearance = 'default', view = 'default', size = 'm', ...rest }, ref) => {
        const viewStyles = appearance === 'default' ? closeInnerViewStyles : closeNoneViewStyles;
        const sizeStyles = appearance === 'default' ? closeInnerSizeStyles : closeNoneSizeStyles;

        // @ts-expect-error _configClassName is an internal runtime property.
        return <CorePopover ref={ref} _configClassName={cls(viewStyles[view], sizeStyles[size])} {...rest} />;
    },
);
