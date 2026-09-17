import React, { forwardRef } from 'react';
import type { RootProps } from 'src/engines/types';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { SpinnerRing, BodyWrapper, base } from './Spinner.styles';
import { classes } from './Spinner.tokens';
import type { SpinnerProps } from './Spinner.types';

const scalingPixelBasis = 16;

export const spinnerRoot = (Root: RootProps<HTMLDivElement, SpinnerProps>) =>
    forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { size, width, height, color, deviceScale, strokeSize, children, style, ...rest } = props;

        const legacySize = typeof size === 'number' ? `${size / scalingPixelBasis}rem` : undefined;
        const legacyWidth = width ?? legacySize;
        const legacyHeight = height ?? legacySize;

        return (
            <Root
                ref={ref}
                size={legacyWidth || legacyHeight ? undefined : size}
                {...rest}
                style={{ width: legacyWidth, height: legacyHeight, color, ...style }}
            >
                {strokeSize !== 0 && <SpinnerRing className={classes.spinnerRing} customStrokeSize={strokeSize} />}
                {children && <BodyWrapper>{children}</BodyWrapper>}
            </Root>
        );
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
