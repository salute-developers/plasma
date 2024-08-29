import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base as sizeCSS } from './variations/_size/base';
import { base as gapCSS } from './variations/_gap/base';
import { base as shapeCSS } from './variations/_shape/base';
import { base as orientationCSS } from './variations/_orientation/base';
import { base as stretchingCSS } from './variations/_stretching/base';
import { base } from './InputGroup.styles';
import { classes } from './InputGroup.tokens';
import type { InputGroupProps, InputGroupRootProps } from './InputGroup.types';

export const inputGroupRoot = (Root: RootProps<HTMLDivElement, InputGroupRootProps>) =>
    forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
        const {
            children,
            className,
            size,
            stretching = 'auto',
            gap = 'dense',
            orientation = 'horizontal',
            shape = 'default',
            isCommonInputStyles = true,
            ...rest
        } = props;

        const orientationClass = classes[orientation];
        const gapClass = classes[gap];
        const shapeClass = classes[shape];
        const stretchingClass = classes[`${stretching}Stretching` as keyof typeof classes];
        const overrideStylesClass = isCommonInputStyles ? classes.inputGroupOverrideStyles : undefined;

        return (
            <Root
                ref={ref}
                size={size}
                gap={gap}
                shape={shape}
                orientation={orientation}
                className={cx(overrideStylesClass, orientationClass, gapClass, shapeClass, stretchingClass, className)}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const inputGroupConfig = {
    name: 'InputGroup',
    tag: 'div',
    layout: inputGroupRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
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
        size: 'm',
        gap: 'dense',
        orientation: 'horizontal',
        shape: 'default',
        stretching: 'auto',
    },
};
