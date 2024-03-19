import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx, getSizeValueFromProp } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as orientationCSS } from './variations/_orientation/base';
import type { DividerProps } from './Divider.types';
import { classes } from './Divider.tokens';

export const dividerRoot = (Root: RootProps<HTMLDivElement, DividerProps>) =>
    forwardRef<HTMLDivElement, DividerProps>(
        ({ view, className, style, orientation = 'horizontal', length = '100%', ...rest }, ref) => {
            const orientationClass = classes[orientation as keyof typeof classes];

            const scaleToken = {
                '--plasma_private-divider-scale': getSizeValueFromProp(length, '%'),
            };

            return (
                <Root
                    ref={ref}
                    className={cx(orientationClass, className)}
                    orientation={orientation}
                    view={view}
                    style={{
                        ...style,
                        ...scaleToken,
                    }}
                    {...rest}
                />
            );
        },
    );

export const dividerConfig = {
    name: 'Divider',
    tag: 'div',
    layout: dividerRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        orientation: {
            css: orientationCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'horizontal',
    },
};
