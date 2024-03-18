import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';

import type { ProgressProps } from './Progress.types';
import { StyledProgress, StyledTrack, StyledValue, base } from './Progress.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

export const progressRoot = (Root: RootProps<HTMLDivElement, ProgressProps>) =>
    forwardRef<HTMLDivElement, ProgressProps>(({ view, status, value, displayValue = true, ...rest }, ref) => {
        const min = 0;
        const max = 100;
        const normalizedValue = Math.max(Math.min(value, max), min);

        return (
            <Root ref={ref} view={status || view} value={normalizedValue} {...rest}>
                <StyledTrack>
                    <StyledProgress value={normalizedValue} />
                </StyledTrack>
                {displayValue && <StyledValue>{normalizedValue}%</StyledValue>}
            </Root>
        );
    });

export const progressConfig = {
    name: 'Progress',
    tag: 'div',
    layout: progressRoot,
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
        size: 'm',
    },
};
