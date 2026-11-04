import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import { base as gapCSS } from './variations/_gap/base';
import { base as shapeCSS } from './variations/_shape/base';
import { base as orientationCSS } from './variations/_orientation/base';
import { base as stretchingCSS } from './variations/_stretching/base';
import type { GroupProps } from './Group.types';
import { base } from './Group.styles';
import { classes } from './Group.tokens';

export const groupRoot = (Root: RootProps<HTMLDivElement, GroupProps>) =>
    forwardRef<HTMLDivElement, GroupProps>((props, ref) => {
        const {
            children,
            className,
            gap = 'dense',
            orientation = 'horizontal',
            shape = 'default',
            stretching = 'auto',
            role = 'group',
            ...rest
        } = props;

        const orientationClass = classes[orientation];
        const gapClass = classes[gap];
        const shapeClass = classes[shape];
        const stretchingClass = classes[`${stretching}Stretching` as keyof typeof classes];

        return (
            <Root
                ref={ref}
                role={role}
                gap={gap}
                orientation={orientation}
                shape={shape}
                stretching={stretching}
                className={cls(orientationClass, gapClass, shapeClass, stretchingClass, className)}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const groupConfig = {
    name: 'Group',
    tag: 'div',
    layout: groupRoot,
    base,
    variations: {
        gap: {
            css: gapCSS,
        },
        orientation: {
            css: orientationCSS,
        },
        shape: {
            css: shapeCSS,
        },
        stretching: {
            css: stretchingCSS,
        },
    },
    defaults: {
        gap: 'dense',
        orientation: 'horizontal',
        shape: 'default',
        stretching: 'auto',
    },
};
