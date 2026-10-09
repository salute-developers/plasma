import React, { forwardRef } from 'react';
import { css } from 'styled-components';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as gapCSS } from './variations/_gap/base';
import { base as shapeCSS } from './variations/_shape/base';
import { base as orientationCSS } from './variations/_orientation/base';
import { base as stretchingCSS } from './variations/_stretching/base';
import type { GroupIconButtonProps } from './GroupIconButton.types';
import { base } from './GroupIconButton.styles';
import { classes, tokens } from './GroupIconButton.tokens';

export const groupIconButtonRoot = (Root: RootProps<HTMLDivElement, GroupIconButtonProps>) =>
    forwardRef<HTMLDivElement, GroupIconButtonProps>((props, ref) => {
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
        const stretchingClass = classes[`${stretching}Stretching` as keyof typeof classes];
        const overrideStylesClass = isCommonButtonStyles ? classes.groupIconButtonOverrideStyles : undefined;

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

export const groupIconButtonConfig = {
    name: 'GroupIconButton',
    tag: 'div',
    layout: groupIconButtonRoot,
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
    intersections: [
        {
            gap: 'dense',
            shape: 'default',
            style: css`
                ${tokens.buttonGroupItemsGap}: 0.25rem;
            `,
        },
        {
            gap: 'dense',
            shape: 'pilled',
            style: css`
                ${tokens.buttonGroupItemsGap}: 0.25rem;
            `,
        },
    ],
};
