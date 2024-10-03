import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base } from './ChipGroup.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as gapCSS } from './variations/_gap/base';
import type { ChipGroupProps } from './ChipGroup.types';
import { classes } from './ChipGroup.tokens';

export const chipGroupRoot = (Root: RootProps<HTMLDivElement, ChipGroupProps>) =>
    forwardRef<HTMLDivElement, ChipGroupProps>((props, ref) => {
        const { children, view, size, className, isWrapped, gap = 'dense', isCommonChipStyles = true, ...rest } = props;

        const overrideStylesClass = isCommonChipStyles ? classes.chipGroupOverrideStyles : undefined;
        const wrappedClass = isWrapped ? classes.wrap : undefined;

        return (
            <Root
                ref={ref}
                view={view}
                size={size}
                gap={gap}
                className={cx(overrideStylesClass, wrappedClass, className)}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const chipGroupConfig = {
    name: 'ChipGroup',
    tag: 'div',
    layout: chipGroupRoot,
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
    },
    defaults: {
        view: 'primary',
        size: 'm',
        gap: 'dense',
    },
};
