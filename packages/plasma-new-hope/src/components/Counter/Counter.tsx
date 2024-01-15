import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { CounterProps } from './Counter.types';
import { base } from './Counter.styles';

export const counterRoot = (Root: RootProps<HTMLDivElement, CounterProps>) =>
    forwardRef<HTMLDivElement, CounterProps>((props, ref) => {
        const { count, maxCount, size, view, ...rest } = props;

        const content = maxCount && count > maxCount ? `${maxCount}+` : count;

        return (
            <Root ref={ref} view={view} size={size} count={count} {...rest}>
                {content}
            </Root>
        );
    });

export const counterConfig = {
    name: 'Counter',
    tag: 'div',
    layout: counterRoot,
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
        view: 'primary',
        size: 'xs',
    },
};
