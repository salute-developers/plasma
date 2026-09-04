import React, { forwardRef } from 'react';
import type { RootProps } from 'src/engines/types';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './Spinner.styles';
import { tokens } from './Spinner.tokens';
import type { SpinnerProps } from './Spinner.types';
import { getCustomSize } from './utils';

export const spinnerRoot = (Root: RootProps<HTMLDivElement, SpinnerProps>) =>
    forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
        const { size, width, height, color, style, ...rest } = props;

        const customWidth = getCustomSize(width);
        const customHeight = getCustomSize(height);
        const customDimensions = customWidth && customHeight ? { width: customWidth, height: customHeight } : undefined;
        const customSize = customDimensions
            ? `min(${customDimensions.width}, ${customDimensions.height})`
            : getCustomSize(size);
        const customStyle: Record<string, string> = {
            ...customDimensions,
            ...(customSize ? { [tokens.size]: customSize } : {}),
            ...(color ? { color } : {}),
        };

        return <Root ref={ref} size={customSize ? undefined : size} {...rest} style={{ ...style, ...customStyle }} />;
    });

export const spinnerConfig = {
    name: 'Spinner',
    tag: 'div',
    layout: spinnerRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'accent',
    },
};
