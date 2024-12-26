import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import type { CounterProps } from './Counter.types';
import { base } from './Counter.styles';
import { classes } from './Counter.tokens';

const MIN_COUNT = 0;

export const counterRoot = (Root: RootProps<HTMLDivElement, CounterProps>) =>
    forwardRef<HTMLDivElement, CounterProps>((props, ref) => {
        const { count, maxCount, size, view, className, ...rest } = props;

        const currentCount = count < MIN_COUNT ? MIN_COUNT : count;
        const currentMaxCount = maxCount && maxCount < MIN_COUNT ? MIN_COUNT : maxCount;

        const isCurrentCountOneDigit = currentCount >= 0 && currentCount < 10;
        const isCurrentMaxCountExceeded = currentMaxCount && currentCount > currentMaxCount;

        const content = isCurrentMaxCountExceeded ? `${currentMaxCount}+` : currentCount;

        const roundClass = !isCurrentMaxCountExceeded && isCurrentCountOneDigit ? classes.round : undefined;

        return (
            <Root ref={ref} view={view} size={size} count={count} className={cx(roundClass, className)} {...rest}>
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
