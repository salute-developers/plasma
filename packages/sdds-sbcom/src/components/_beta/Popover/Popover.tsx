import React, { forwardRef } from 'react';
import cls from 'classnames';
import { Popover as CorePopover } from '@salutejs/plasma-new-hope/beta';
import type { PopoverProps as CorePopoverProps } from '@salutejs/plasma-new-hope/beta';

import sizeStyles from './config/Size.module.css';
import viewStyles from './config/View.module.css';

export type PopoverProps = Omit<CorePopoverProps, 'appearance'> & {
    view?: 'default';
    size?: 'm';
};

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(({ view = 'default', size = 'm', ...rest }, ref) => {
    const configClassName = cls(viewStyles[view], sizeStyles[size]);

    return (
        <CorePopover
            ref={ref}
            appearance="default"
            // @ts-expect-error _configClassName is an internal runtime property.
            _configClassName={configClassName}
            {...rest}
        />
    );
});
