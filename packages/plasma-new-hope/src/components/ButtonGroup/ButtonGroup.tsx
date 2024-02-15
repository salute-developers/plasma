import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as gapCSS } from './variations/_gap/base';
import { base as shapeCSS } from './variations/_shape/base';
import { base as orientationCSS } from './variations/_orientation/base';
import { base as stretchingCSS } from './variations/_stretching/base';
import type { ButtonGroupProps } from './ButtonGroup.types';
import { base } from './ButtonGroup.styles';
import { classes } from './ButtonGroup.tokens';

export const buttonGroupRoot = (Root: RootProps<HTMLDivElement, ButtonGroupProps>) =>
    forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
        const {
            children,
            view,
            size,
            className,
            stretching = 'auto',
            gap = 'dense',
            orientation = 'horizontal',
            shape = 'default',
            isCommonButtonStyles = true,
            ...rest
        } = props;

        const orientationClass = classes[orientation];
        const gapClass = classes[gap];
        const shapeClass = classes[shape];
        const stretchingClass = classes[`${stretching}Stretching`];
        const overrideStylesClass = isCommonButtonStyles ? classes.buttonGroupOverrideStyles : undefined;

        return (
            <Root
                ref={ref}
                view={view}
                size={size}
                gap={gap}
                orientation={orientation}
                shape={shape}
                className={cx(overrideStylesClass, orientationClass, gapClass, shapeClass, stretchingClass, className)}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const buttonGroupConfig = {
    name: 'ButtonGroup',
    tag: 'div',
    layout: buttonGroupRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
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
        view: 'primary',
        size: 'm',
        gap: 'dense',
        orientation: 'horizontal',
        shape: 'default',
        stretching: 'auto',
    },
};
