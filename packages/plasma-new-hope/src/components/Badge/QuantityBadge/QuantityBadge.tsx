import React, { forwardRef } from 'react';

import type { RootProps } from '../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { QuantityBadgeProps } from './QuantityBadge.types';
import { StyledContentMain, base } from './QuantityBadge.styles';

export const quantityBadgeRoot = (Root: RootProps<HTMLButtonElement, QuantityBadgeProps>) =>
    forwardRef<HTMLButtonElement, QuantityBadgeProps>((props, ref) => {
        const { children, text, size, view, ...rest } = props;

        const txt = !text && typeof children === 'string' ? children : text;

        return (
            <Root ref={ref} view={view} size={size} {...rest}>
                {txt ? <StyledContentMain>{txt}</StyledContentMain> : children}
            </Root>
        );
    });

export const quantityBadgeConfig = {
    name: 'QuantityBadge',
    tag: 'div',
    layout: quantityBadgeRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'xs',
    },
};
